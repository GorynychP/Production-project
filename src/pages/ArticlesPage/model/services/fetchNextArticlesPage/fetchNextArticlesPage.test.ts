import { TestAsyncThunk } from 'shared/lib/test/TestAcyncThunk/TestAcyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { ArticleView } from 'entities/Article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList.ts');

describe('fetchNextArticlesPage.test', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: true,
				view: ArticleView.BIG,
				_inited: false,
			},
		});

		await thunk.callThunk();

		expect(thunk.dispatch).toBeCalledTimes(4);
		expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
	});
	test('fetchArticlesList not called', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: false,
				view: ArticleView.BIG,
				_inited: false,
			},
		});

		await thunk.callThunk();

		expect(thunk.dispatch).toBeCalledTimes(2);
		expect(fetchArticlesList).not.toHaveBeenCalled();
	});
});
