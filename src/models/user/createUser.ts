export interface CreateUser {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	isFather: boolean;
	isUpdate: boolean;
	acceptTyC: boolean;
	acceptTPD: boolean;
	birthday: string;
	sex: boolean;
	address: string;
	identification: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: null;
}

export interface UserCreatedResponse {
	status: number;
	response: Response;
}

export interface Response {
	id: number;
	email: string;
	identification: number;
	firstName: string;
	lastName: string;
	phone: string;
	address: string;
	birthday: string;
	isFather: boolean;
	isUpdate: boolean;
	sex: null;
	acceptTyC: boolean;
	acceptTPD: boolean;
	updatedAt: Date;
	createdAt: Date;
}
