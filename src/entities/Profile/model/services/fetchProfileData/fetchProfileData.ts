import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
// 'https://863e9faeb060e6b2.mokky.dev/auth'

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThankConfig<string>
>('profile/fetchProfileData', async (profileId, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<Profile>(
            `/profile/${profileId}`,
        );
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('error');
    }
});
