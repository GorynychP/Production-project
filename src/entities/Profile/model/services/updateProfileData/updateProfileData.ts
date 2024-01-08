import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors';
// 'https://863e9faeb060e6b2.mokky.dev/auth'

export const updateProfileData = createAsyncThunk<Profile, void, ThankConfig<string>>(
	'prifile/updateProfileData',
	async (_, thunkAPI) => {
		const formData = getProfileForm(thunkAPI.getState());
		try {
			const response = await thunkAPI.extra.api.put<Profile>('/profile', formData);
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
