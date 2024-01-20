import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

// 'https://863e9faeb060e6b2.mokky.dev/auth'

export const fetchCommentsByArticleId = createAsyncThunk<
	Comment[],
	string | undefined,
	ThankConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
	if (!articleId) {
		return thunkAPI.rejectWithValue('error');
	}
	try {
		const response = await thunkAPI.extra.api.get<Comment[]>(`/comments/`, {
			params: { articleId, _expand: 'user' },
		});
		if (!response.data) {
			throw new Error();
		}
		return response.data;
	} catch (e) {
		console.log(e);
		return thunkAPI.rejectWithValue('error');
	}
});
