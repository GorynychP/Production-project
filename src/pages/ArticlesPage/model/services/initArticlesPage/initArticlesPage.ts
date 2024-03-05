import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlePageInited } from '../../selectors/articlesPageSelector';
import { articlesPageAction } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export const initedArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initedArticlesPage', async (searchParams, thunkAPI) => {
    const inited = getArticlePageInited(thunkAPI.getState());

    if (!inited) {
        const orderFormUrl = searchParams.get('order') as SortOrder;
        const sortFormUrl = searchParams.get('sort') as ArticleSortField;
        const searchFormUrl = searchParams.get('search');
        const typeFormUrl = searchParams.get('type') as ArticleType;
        if (orderFormUrl) {
            thunkAPI.dispatch(articlesPageAction.setOrder(orderFormUrl));
        }
        if (sortFormUrl) {
            thunkAPI.dispatch(articlesPageAction.setSort(sortFormUrl));
        }
        if (searchFormUrl) {
            thunkAPI.dispatch(articlesPageAction.setSearch(searchFormUrl));
        }
        if (typeFormUrl) {
            thunkAPI.dispatch(articlesPageAction.setType(typeFormUrl));
        }
        thunkAPI.dispatch(articlesPageAction.initState());
        thunkAPI.dispatch(fetchArticlesList({}));
    }
});
