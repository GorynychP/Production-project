import { StateSchema } from 'app/providers/StoreProvider';
import {
	getArticleDetailsCommentsError,
	getArticleDetailsCommentsLoading,
} from './articleDetailsComments';

describe('articleDetailsComments.test', () => {
	test('should return error', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetailsComments: { error: 'error' },
		};
		expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual('error');
	});
	test('should return isLoading', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetailsComments: { isLoading: true },
		};
		expect(getArticleDetailsCommentsLoading(state as StateSchema)).toEqual(true);
	});
	test('should work with empty isLoading', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleDetailsCommentsLoading(state as StateSchema)).toEqual(false);
	});
});
