import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = { _inited: false };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
        },
        // initAuthDataLocal: state => {
        //     const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        //     if (user) {
        //         const json = JSON.parse(user) as User;
        //         state.authData = json;
        //     }
        //     state._inited = true;
        // },
        logout: state => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: builder => {
        builder.addCase(
            initAuthData.fulfilled,
            (state, { payload }: PayloadAction<User>) => {
                state.authData = payload;
                setFeatureFlags(payload.features);
                state._inited = true;
            },
        );
        builder.addCase(initAuthData.rejected, state => {
            state._inited = true;
        });
    },
});

// Action creators are generated for each case reducer function
export const { actions: userAction } = userSlice;

export const { reducer: userReducer } = userSlice;
