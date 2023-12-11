import { api } from '../../api/api';
import { UserByEmailResponse } from '../../models/user';
import { UserByIdResponse } from '../../models/user/userById';

export const getUserByEmail = (email: string) => {
	return api.get<UserByEmailResponse>(`/user/findByEmail/${email}`);
};

export const getUserById = (id: string) => {
	return api.get<UserByIdResponse>(`/user/findOne/${id}`);
};
