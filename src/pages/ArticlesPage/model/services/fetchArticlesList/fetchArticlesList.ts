import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from '../../selectors/articlesPageSelector';

interface fetchArticlesPageProps {
	page: number;
}

export const fetchArticlesList = createAsyncThunk<
	Article[],
	fetchArticlesPageProps,
	ThankConfig<string>
>('articlesPage/fetchArticlesList', async (args, thunkAPI) => {
	const { page = 1 } = args;
	const limit = getArticlePageLimit(thunkAPI.getState());
	try {
		const response = await thunkAPI.extra.api.get<Article[]>(`/articles/`, {
			params: { _expand: 'user', _limit: limit, _page: page },
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
