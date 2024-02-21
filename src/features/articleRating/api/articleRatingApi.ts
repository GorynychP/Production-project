import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface ArticleRatingArgs {
    userId: string;
    articleId: string;
}
interface RateArticleArgs {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        getArticleRating: build.query<Rating[], ArticleRatingArgs>({
            query: ({ userId, articleId }) => ({
                url: './article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<Rating[], RateArticleArgs>({
            query: arg => ({
                url: './article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
