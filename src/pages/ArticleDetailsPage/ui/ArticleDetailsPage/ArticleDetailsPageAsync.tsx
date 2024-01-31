import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
    () =>
        new Promise(resolve => {
            // @ts-expect-error тест
            setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
        }),
);
