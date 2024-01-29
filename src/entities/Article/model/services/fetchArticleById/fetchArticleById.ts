import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';
// 'https://863e9faeb060e6b2.mokky.dev/auth'

export const fetchArticleById = createAsyncThunk<Article, string, ThankConfig<string>>(
	'article/fetchArticleById',
	async (articleId, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`, {
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
