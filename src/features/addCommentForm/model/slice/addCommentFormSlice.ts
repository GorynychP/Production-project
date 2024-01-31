import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AddCommentFormSchema } from '../types/addCommentFormSchema'

const initialState: AddCommentFormSchema = { text: '', isLoading: false }

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setCommentText: (state, actions: PayloadAction<string>) => {
            state.text = actions.payload
        }
    }
    // extraReducers: (builder) => {
    // 	builder
    // 		.addCase(loginByUsername.pending, (state) => {
    // 			state.error = undefined;
    // 		})
    // 		.addCase(loginByUsername.fulfilled, (state, action) => {
    // 			// state.username = action.payload;
    // 		})
    // 		.addCase(loginByUsername.rejected, (state, action) => {
    // 			state.error = action.payload;
    // 		});
    // },
})

export const { actions: addCommentFormAction } = addCommentFormSlice

export const { reducer: addCommentFormReducer } = addCommentFormSlice
