import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

// 'https://863e9faeb060e6b2.mokky.dev/auth'

export const fetchArticleList = createAsyncThunk<Article[], void, ThankConfig<string>>(
	'articlesPage/fetchArticleList',
	async (_, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Article[]>(`/articles/`, {
				params: { _expand: 'user' },
			});
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
