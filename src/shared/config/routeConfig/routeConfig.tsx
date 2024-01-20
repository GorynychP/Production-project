import React from 'react';
import { AboutPageAsync } from 'pages/AboutPage';
import { MainPageAsync } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';
import { ProfilePageAsync } from 'pages/ProfilePage';
import { ArticlesPageAsync } from 'pages/ArticlesPage';
import { ArticleDetailsPageAsync } from 'pages/ArticleDetailsPage';

export type AppRoutesPorops = RouteProps & {
	authOnly?: boolean;
};
export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLE_DETAILS = 'article_details',
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile/', //+id
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLE_DETAILS]: '/articles/', //+id
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfige: Record<AppRoutes, AppRoutesPorops> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPageAsync />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPageAsync />,
	},
	[AppRoutes.PROFILE]: {
		path: `${RoutePath.profile}:id`,
		element: <ProfilePageAsync />,
		authOnly: true,
	},
	[AppRoutes.ARTICLES]: {
		path: RoutePath.articles,
		element: <ArticlesPageAsync />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: `${RoutePath.article_details}:id`,
		element: <ArticleDetailsPageAsync />,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
