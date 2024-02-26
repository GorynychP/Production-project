import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getArticleDetailsRecommendError,
    getArticleDetailsRecommendLoading,
} from './recommendationSelectors';

describe('recommendationSelectors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsRecommendation: { error: 'error' },
        };
        expect(getArticleDetailsRecommendError(state as StateSchema)).toEqual(
            'error',
        );
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsRecommendation: { isLoading: true },
        };
        expect(getArticleDetailsRecommendLoading(state as StateSchema)).toEqual(
            true,
        );
    });
    test('should work with empty isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsRecommendLoading(state as StateSchema)).toEqual(
            false,
        );
    });
});
