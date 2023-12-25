export interface LoginSchema {
	email?: string;
	username: string;
	password: string;
	lsLoading: boolean;
	error?: string;
}
