import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
// 'https://863e9faeb060e6b2.mokky.dev/auth'

export const fetchProfileData = createAsyncThunk<Profile, void, ThankConfig<string>>(
	'prifile/fetchProfileData',
	async (_, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Profile>('/profile');
			if (!response.data) {
				throw new Error();
			}
			return response.data;
		} catch (e) {
			console.log(e);
			return thunkAPI.rejectWithValue('error');
		}
	},
);
