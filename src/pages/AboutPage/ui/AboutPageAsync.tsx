import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () =>
        new Promise(resolve => {
            // @ts-expect-error тест
            setTimeout(() => resolve(import('./AboutPage')), 400);
        }),
);
