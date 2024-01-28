import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from '../../selectors/articlesPageSelector';
import { articlePageAction } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';

export const initedArticlesPage = createAsyncThunk<void, URLSearchParams, ThankConfig<string>>(
	'articlesPage/initedArticlesPage',
	async (searchParams, thunkAPI) => {
		const inited = getArticlePageInited(thunkAPI.getState());

		if (!inited) {
			const orderFormUrl = searchParams.get('order') as SortOrder;
			const sortFormUrl = searchParams.get('sort') as ArticleSortField;
			const searchFormUrl = searchParams.get('search');
			const typeFormUrl = searchParams.get('type') as ArticleType;
			if (orderFormUrl) {
				thunkAPI.dispatch(articlePageAction.setOrder(orderFormUrl));
			}
			if (sortFormUrl) {
				thunkAPI.dispatch(articlePageAction.setSort(sortFormUrl));
			}
			if (searchFormUrl) {
				thunkAPI.dispatch(articlePageAction.setSearch(searchFormUrl));
			}
			if (typeFormUrl) {
				thunkAPI.dispatch(articlePageAction.setType(typeFormUrl));
			}
			thunkAPI.dispatch(articlePageAction.initState());
			thunkAPI.dispatch(fetchArticlesList({}));
		}
	},
);
