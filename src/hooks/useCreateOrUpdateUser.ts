import { useEffect, useRef, useState } from 'react';
import { isAxiosError } from 'axios';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { createUser, updateUser } from '../services/users';
import { User } from '../models/user';

// validation schema
export const registerOrUpdateSchema = yup
	.object({
		email: yup.string().email('Debe ser un correo valido').required('Campo obligatorio'),
		identification: yup.string().required('Campo obligatorio'),
		firstName: yup.string().required('Campo obligatorio'),
		lastName: yup.string().required('Campo obligatorio'),
		address: yup.string().required('Campo obligatorio'),
		phone: yup.string().required('Campo obligatorio'),
		birthday: yup.string().required('Campo obligatorio'),
		isFather: yup.string().required('Campo obligatorio'),
		tyc: yup.boolean().required('Campo obligatorio'),
		ttd: yup.boolean().required('Campo obligatorio'),
		sex: yup.string().required('Campo obligatorio'),
	})
	.required();

// type definitions
export type RegisterOrUpdateSchema = yup.InferType<typeof registerOrUpdateSchema>;

interface IUseCreateOrUpdateUser {
	user: User | null;
	email: string;
	setShowSecondForm: React.Dispatch<React.SetStateAction<boolean>>;
	existUser: boolean;
}

export const useCreateOrUpdateUser = ({ user, email, setShowSecondForm, existUser }: IUseCreateOrUpdateUser) => {
	const [loadingRegister, setLoadingRegister] = useState(false);
	const defaultValues = useRef<RegisterOrUpdateSchema>({
		email: user?.email ?? email ?? '',
		identification: user?.identification ?? '',
		firstName: user?.firstName ?? '',
		lastName: user?.lastName ?? '',
		phone: user?.phone ?? '',
		birthday: user?.birthday ?? '',
		address: user?.address ?? '',
		isFather: user?.isFather ? 'yes' : 'not' ?? 'not',
		sex: user?.sex ? 'yes' : 'not' ?? 'not',
		tyc: user?.acceptTyC ?? false,
		ttd: user?.acceptTPD ?? false,
	});

	const MySwal = withReactContent(Swal);

	const { register, handleSubmit, getValues, setValue, setError, clearErrors, control, watch } = useForm<RegisterOrUpdateSchema>({
		mode: 'all',
		resolver: yupResolver(registerOrUpdateSchema),
		defaultValues: defaultValues.current,
	});

	const { isValid, errors } = useFormState({ control });

	watch();

	useEffect(() => {
		if (user) {
			setValue('email', user?.email, {
				shouldValidate: true,
			});
			setValue('identification', user?.identification, {
				shouldValidate: true,
			});
			setValue('firstName', user?.firstName, {
				shouldValidate: true,
			});
			setValue('lastName', user?.lastName, {
				shouldValidate: true,
			});
			setValue('phone', user?.phone, {
				shouldValidate: true,
			});
			setValue('address', user?.address, {
				shouldValidate: true,
			});
			setValue('birthday', user?.birthday, {
				shouldValidate: true,
			});
			setValue('isFather', user?.isFather ? 'yes' : 'not', {
				shouldValidate: true,
			});
			setValue('sex', user?.sex ? 'yes' : 'not', {
				shouldValidate: true,
			});
			setValue('tyc', user?.acceptTyC, {
				shouldValidate: true,
			});
			setValue('ttd', user?.acceptTPD, {
				shouldValidate: true,
			});
			return;
		}

		setValue('email', email, {
			shouldValidate: true,
		});
	}, [user, email]);

	const onSubmitRegister = async (dataToSubmit: RegisterOrUpdateSchema): Promise<void> => {
		setLoadingRegister(true);
		try {
			if (!existUser) {
				await createUser({
					firstName: dataToSubmit.firstName,
					lastName: dataToSubmit.lastName,
					email: dataToSubmit.email,
					phone: dataToSubmit.phone,
					birthday: dataToSubmit.birthday,
					isFather: dataToSubmit.isFather === 'yes',
					isUpdate: false,
					acceptTyC: dataToSubmit.tyc,
					acceptTPD: dataToSubmit.ttd,
					sex: dataToSubmit.sex === 'yes',
					address: dataToSubmit.address,
					identification: dataToSubmit.identification,
				});
			} else {
				if (user?.id) {
					await updateUser(
						{
							id: user?.id.toString(),
							firstName: dataToSubmit.firstName,
							lastName: dataToSubmit.lastName,
							email: dataToSubmit.email,
							phone: dataToSubmit.phone,
							birthday: dataToSubmit.birthday,
							isFather: dataToSubmit.isFather === 'yes',
							isUpdate: true,
							acceptTyC: dataToSubmit.tyc,
							acceptTPD: dataToSubmit.ttd,
							sex: dataToSubmit.sex === 'yes',
							address: dataToSubmit.address,
							identification: dataToSubmit.identification,
						},
						user?.id.toString()
					);
				}
			}

			setLoadingRegister(false);
			MySwal.fire({
				icon: 'success',
				html: `
          <p class="font-bold leading-6">¡Has actualizado tus datos!</p>
          <p class="font-bold leading-6">Muchas gracias por tu actualización</p>
        `,
				confirmButtonText: 'ENTENDIDO',
				confirmButtonColor: 'black',
			}).then((resp) => {
				if (resp.isConfirmed) {
					setShowSecondForm(false);
				}
			});
		} catch (error) {
			if (isAxiosError(error)) {
				console.log(error);
				setLoadingRegister(false);
			}
		}
	};

	return {
		registerRegister: register,
		handleSubmitRegister: handleSubmit,
		getValuesRegister: getValues,
		setValueRegister: setValue,
		setErrorRegister: setError,
		clearErrorsRegister: clearErrors,
		controlRegister: control,
		watchRegister: watch,
		isValidRegister: isValid,
		errorsRegister: errors,
		onSubmitRegister,
		loadingRegister,
	};
};
