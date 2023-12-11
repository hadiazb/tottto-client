export interface UserByEmailResponse {
	status: number;
	response: Response;
}

export interface Response {
	user: User;
	message: string;
}

export interface User {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	isFather: boolean;
	isUpdate: boolean;
	birthday: string;
	acceptTyC: boolean;
	acceptTPD: boolean;
	sex: null;
	address: string;
	identification: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: null;
}
