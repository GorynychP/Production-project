import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    () =>
        new Promise(resolve => {
            // @ts-expect-error тест
            setTimeout(() => resolve(import('./ProfilePage')), 400);
        }),
);
// export const ProfilePageAsync = lazy(() => import('./ProfilePage'));
