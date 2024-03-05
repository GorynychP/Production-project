import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';
// 'https://863e9faeb060e6b2.mokky.dev/auth'

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>('article/fetchArticleById', async (articleId, thunkAPI) => {
    try {
        if (!articleId) {
            throw new Error('');
        }
        const response = await thunkAPI.extra.api.get<Article>(
            `/articles/${articleId}`,
            {
                params: { _expand: 'user' },
            },
        );
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('error');
    }
});
