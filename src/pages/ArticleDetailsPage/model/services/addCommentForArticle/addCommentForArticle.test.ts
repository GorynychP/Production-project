// import { addCommentForArticle } from './addCommentForArticle';
// import { TestAsyncThunk } from 'shared/lib/test/TestAcyncThunk/TestAcyncThunk';

// describe('addCommentForArticle.test', () => {
// 	test('fetch comments data', async () => {
// 		const commentData = { id: '1', articleId: '1', userId: '1', text: 'hello' };
// 		const thunk = new TestAsyncThunk(addCommentForArticle);
// 		thunk.api.post.mockReturnValue(Promise.resolve({ data: commentData }));
// 		const result = await thunk.callThunk('hello');
// 		// expect(thunk.api.post).toHaveBeenCalled();
// 		expect(result.payload).toEqual(commentData);
// 		expect(result.meta.requestStatus).toBe('fulfilled');
// 	});

// 	test('error fetch data', async () => {
// 		const thunk = new TestAsyncThunk(addCommentForArticle);
// 		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
// 		const result = await thunk.callThunk('1');
// 		expect(result.meta.requestStatus).toBe('rejected');
// 	});
// });
