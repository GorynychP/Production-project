import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThankConfig } from 'app/providers/StoreProvider'
import { Article, ArticleType } from 'entities/Article'
import {
    getArticlePageLimit,
    getArticlePageNum,
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType
} from '../../selectors/articlesPageSelector'
import { addQueryParams } from 'shared/url/addQueryParams/addQueryParams'
interface FetchArticlesListProps {
	replace?: boolean;
}
export const fetchArticlesList = createAsyncThunk<
	Article[],
	FetchArticlesListProps,
	ThankConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkAPI) => {
    const limit = getArticlePageLimit(thunkAPI.getState())
    const order = getArticlePageOrder(thunkAPI.getState())
    const sort = getArticlePageSort(thunkAPI.getState())
    const search = getArticlePageSearch(thunkAPI.getState())
    const page = getArticlePageNum(thunkAPI.getState())
    const type = getArticlePageType(thunkAPI.getState())
    try {
        addQueryParams({ sort, order, type, search })
        const response = await thunkAPI.extra.api.get<Article[]>('/articles/', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _order: order,
                _sort: sort,
                type: type === ArticleType.ALL ? undefined : type,
                q: search
            }
        })
        if (!response.data) {
            throw new Error()
        }
        return response.data
    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue('error')
    }
})
