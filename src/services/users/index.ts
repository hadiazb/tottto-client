import { api } from '../../api/api';

import { UserByEmailResponse, UserByIdResponse } from '../../models/user';
import { CreateUser, UserCreatedResponse } from '../../models/user/createUser';

export const getUserByEmail = async (email: string) => {
	const { data } = await api.get<UserByEmailResponse>(`/user/findByEmail/${email}`);
	return data;
};

export const getUserById = async (id: string) => {
	const { data } = await api.get<UserByIdResponse>(`/user/findOne/${id}`);

	return data;
};

export const createUser = async (user: CreateUser & { isUpdate: boolean }) => {
	const { data } = await api.post<UserCreatedResponse>(`/user/createOne`, {
		...user,
	});

	return data;
};

export const updateUser = async (user: CreateUser & { isUpdate: boolean; id: string }, id: string) => {
	const { data } = await api.put<UserCreatedResponse>(`/user/updateOne/${id}`, {
		...user,
	});

	return data;
};
