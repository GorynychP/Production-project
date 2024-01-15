export interface User {
	id: string;
	// email?: string;
	username: string;
}
export interface UserSchema {
	authData?: User;
	_inited: boolean;
}
