import { lazy } from 'react';

export const MainPageAsync = lazy(
    () =>
        new Promise(resolve => {
            // @ts-expect-error тест
            setTimeout(() => resolve(import('./MainPage')), 400);
        }),
);
