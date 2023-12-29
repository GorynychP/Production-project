import React from 'react';
import { AboutPageAsync } from 'pages/AboutPage';
import { MainPageAsync } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';
import { ProfilePageAsync } from 'pages/ProfilePage/ui/ProfilePageAsync';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not_found',
	PROFILE = 'profile',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfige: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPageAsync />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPageAsync />,
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath.profile,
		element: <ProfilePageAsync />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
