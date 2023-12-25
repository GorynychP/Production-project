import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userAction } from 'entities/User';
import { USER_LOCALSTORAGEG_KEY } from 'shared/const/localStorage';
// 'https://863e9faeb060e6b2.mokky.dev/auth'
interface LoginByUsernameProps {
	email?: string;
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<
	User,
	LoginByUsernameProps,
	{ rejectValue: string }
>('login/fetchByUsername', async (authData, thunkAPI) => {
	try {
		const response = await axios.post<User>(
			'http://localhost:5000/login',
			authData,
		);
		if (!response.data) {
			throw new Error();
		}
		localStorage.setItem(USER_LOCALSTORAGEG_KEY, JSON.stringify(response.data));
		thunkAPI.dispatch(userAction.setAuthData(response.data));
		return response.data;
	} catch (e) {
		console.log(e);
		return thunkAPI.rejectWithValue('error');
	}
});
