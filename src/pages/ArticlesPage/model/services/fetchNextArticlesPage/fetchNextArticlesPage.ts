import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThankConfig } from 'app/providers/StoreProvider'
import {
    getArticlePageHasMore,
    getArticlePageIsLoading,
    getArticlePageNum
} from '../../selectors/articlesPageSelector'
import { articlePageAction } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThankConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const hasMore = getArticlePageHasMore(thunkAPI.getState())
        const page = getArticlePageNum(thunkAPI.getState())
        const isLoading = getArticlePageIsLoading(thunkAPI.getState())

        if (hasMore && !isLoading) {
            thunkAPI.dispatch(articlePageAction.setPage(page + 1))
            thunkAPI.dispatch(fetchArticlesList({}))
        }
    }
)
