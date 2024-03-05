import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userAction } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
// 'https://863e9faeb060e6b2.mokky.dev/auth'
interface LoginByUsernameProps {
    email?: string;
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/fetchByUsername', async (authData, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.post<User>(
            '/login',
            authData,
        );
        if (!response.data) {
            throw new Error();
        }
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );
        thunkAPI.dispatch(userAction.setAuthData(response.data));
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('error');
    }
});
