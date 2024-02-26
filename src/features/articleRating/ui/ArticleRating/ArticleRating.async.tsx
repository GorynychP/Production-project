import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton';

const ArticleRatingLaze = lazy(
    () =>
        new Promise(resolve => {
            // @ts-expect-error тест
            setTimeout(() => resolve(import('./ArticleRating')), 400);
        }),
);

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={'100%'} height={120} />}>
            <ArticleRatingLaze {...props} />
        </Suspense>
    );
};
