import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePageNum,
} from '../../selectors/articlesPageSelector';
import { articlesPageAction } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkAPI) => {
    const hasMore = getArticlePageHasMore(thunkAPI.getState());
    const page = getArticlePageNum(thunkAPI.getState());
    const isLoading = getArticlePageIsLoading(thunkAPI.getState());

    if (hasMore && !isLoading) {
        thunkAPI.dispatch(articlesPageAction.setPage(page + 1));
        thunkAPI.dispatch(fetchArticlesList({}));
    }
});
