import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchRecommendArticles = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>('articlesDetailsPage/fetchRecommendArticles', async (_, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get<Article[]>('/articles/', {
            params: {
                _limit: 4,
            },
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
