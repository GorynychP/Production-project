import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from '../../selectors/articlesPageSelector';
import { articlePageAction } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initedArticlesPage = createAsyncThunk<void, void, ThankConfig<string>>(
	'articlesPage/initedArticlesPage',
	async (_, thunkAPI) => {
		const inited = getArticlePageInited(thunkAPI.getState());

		if (!inited) {
			thunkAPI.dispatch(articlePageAction.initState());
			thunkAPI.dispatch(fetchArticlesList({ page: 1 }));
		}
	},
);
