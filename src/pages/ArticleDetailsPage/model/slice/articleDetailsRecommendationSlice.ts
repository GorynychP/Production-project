import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleDetailsRecommendSchema } from '../types/ArticleDetailsRecommendSchema';
import { Article } from '@/entities/Article';
import { fetchRecommendArticles } from '../services/fetchRecommendArticles/fetchRecommendArticles';

const recommendAdapter = createEntityAdapter<Article>({
    selectId: articleRecommend => articleRecommend.id,
});

export const getArticleRecommend = recommendAdapter.getSelectors<StateSchema>(
    state =>
        state.articleDetailsRecommendation ||
        recommendAdapter.getInitialState(),
);

const articleDetailsRecommendSlice = createSlice({
    name: 'ArticleDetailsRecommendSlice',
    initialState:
        recommendAdapter.getInitialState<ArticleDetailsRecommendSchema>({
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        }),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchRecommendArticles.pending, state => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchRecommendArticles.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    recommendAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchRecommendArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsRecommendReducer } =
    articleDetailsRecommendSlice;
