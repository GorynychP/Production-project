import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';
import { TestAsyncThunk } from 'shared/lib/test/TestAcyncThunk/TestAcyncThunk';

describe('fetchCommentsByArticleId.test', () => {
	test('fetch comments data', async () => {
		const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
		thunk.api.get.mockReturnValue(
			Promise.resolve({
				data: [{ id: '1', text: 'hello' }],
			}),
		);
		const result = await thunk.callThunk('1');
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.payload).toEqual([{ id: '1', text: 'hello' }]);
		expect(result.meta.requestStatus).toBe('fulfilled');
	});

	test('error fetch data', async () => {
		const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk('1');
		expect(result.meta.requestStatus).toBe('rejected');
	});
});
