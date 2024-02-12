import { lazy } from 'react';

export const AdminPanelPageAsync = lazy(
    () =>
        new Promise(resolve => {
            // @ts-expect-error тест
            setTimeout(() => resolve(import('./AdminPanelPage')), 400);
        }),
);
