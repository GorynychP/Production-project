import { articleDataTest } from '../../slice/articleDetailsSlice.test';
import { fetchArticleById } from './fetchArticleById';
import { TestAsyncThunk } from 'shared/lib/test/TestAcyncThunk/TestAcyncThunk';

describe('fetchArticleById.test', () => {
	test('fetch data', async () => {
		const thunk = new TestAsyncThunk(fetchArticleById);
		thunk.api.get.mockReturnValue(Promise.resolve({ data: articleDataTest }));
		const result = await thunk.callThunk('1');
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.payload).toEqual(articleDataTest);
		expect(result.meta.requestStatus).toBe('fulfilled');
	});

	test('error fetch data', async () => {
		const thunk = new TestAsyncThunk(fetchArticleById);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk('1');
		expect(result.meta.requestStatus).toBe('rejected');
	});
});
