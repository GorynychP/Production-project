import { lazy } from 'react';

export const ProfilePageAsync = lazy(
	() =>
		new Promise((res) => {
			//@ts-ignore
			setTimeout(() => res(import('./ProfilePage')), 400);
		}),
);
// export const ProfilePageAsync = lazy(() => import('./ProfilePage'));
