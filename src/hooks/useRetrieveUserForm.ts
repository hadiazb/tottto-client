import { useRef, useState } from 'react';
import { isAxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { getUserByEmail } from '../services/users';
import { User } from '../models/user';

// validation schema
export const emailSchema = yup
	.object({
		email: yup.string().email('Debe ser un correo valido').required('Campo obligatorio'),
	})
	.required();

// type definitions
export type EmailFormType = yup.InferType<typeof emailSchema>;

export const useRetrieveUserForm = () => {
	const [showSecondForm, setShowSecondForm] = useState(false);
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(false);
	const [existUser, setExistUser] = useState(false);

	const defaultValuesRef = useRef<EmailFormType>({
		email: '',
	});

	const { register, handleSubmit, getValues, setValue, setError, clearErrors, control, watch } = useForm<EmailFormType>({
		mode: 'all',
		resolver: yupResolver(emailSchema),
		defaultValues: defaultValuesRef.current,
	});

	const { isValid, errors } = useFormState({ control });

	const onSubmitEmail = async ({ email }: EmailFormType): Promise<void> => {
		try {
			setLoading(true);
			const { response } = await getUserByEmail(email);
			setLoading(false);

			if (response.user) {
				setExistUser(true);
			}

			if (response.user.isUpdate === false) {
				console.log('entre');
				setShowSecondForm(true);
				setCurrentUser(response.user);
			}
		} catch (error) {
			setLoading(false);
			if (isAxiosError(error)) {
				console.log(error.response?.status);
				if (error.response?.status === 404) {
					setShowSecondForm(true);
				}
			}
		}
	};

	watch();

	return {
		getValues,
		setValue,
		setError,
		clearErrors,
		handleSubmitEmail: handleSubmit,
		registerEmail: register,
		watchEmail: watch,
		controlEmail: control,
		control,
		isValid,
		errors,
		onSubmitEmail,
		showSecondForm,
		loading,
		defaultValuesRef,
		currentUser,
		setShowSecondForm,
		existUser,
	};
};
