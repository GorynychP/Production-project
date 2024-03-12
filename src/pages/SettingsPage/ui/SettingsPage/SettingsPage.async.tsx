import { lazy } from 'react';

export const SettingsPageAsync = lazy(
    () =>
        new Promise(resolve => {
            // @ts-expect-error тест
            setTimeout(() => resolve(import('./SettingsPage')), 400);
        }),
);
