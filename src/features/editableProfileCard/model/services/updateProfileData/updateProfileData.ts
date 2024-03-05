import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getProfileForm } from '../../selectors';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { Profile } from '@/entities/Profile';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';
// 'https://863e9faeb060e6b2.mokky.dev/auth'

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErrors[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const formData = getProfileForm(thunkAPI.getState());

    const errors = validateProfileData(formData);
    if (errors.length) {
        return thunkAPI.rejectWithValue(errors);
    }

    try {
        const response = await thunkAPI.extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData,
        );
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
});
