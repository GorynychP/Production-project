export interface LoginSchema {
	email?: string;
	username: string;
	password: string;
	isLoading: boolean;
	error?: string;
}
