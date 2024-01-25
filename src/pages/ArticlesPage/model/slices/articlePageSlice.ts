import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticlePageSchema } from '../types/articlePageSchema';
import { fetchArticleList } from '../services/fetchArticlesList/fetchArticleList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const articlesAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const getArticle = articlesAdapter.getSelectors<StateSchema>(
	(state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const ArticlePageSlice = createSlice({
	name: 'ArticlePageSlice',
	initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
		isLoading: false,
		error: undefined,
		view: ArticleView.BIG,
		ids: [],
		entities: {},
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload;
			localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
		},
		initState: (state) => {
			state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleList.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<Article[]>) => {
				state.isLoading = false;
				articlesAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticleList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articlePageReducer } = ArticlePageSlice;
export const { actions: articlePageAction } = ArticlePageSlice;
