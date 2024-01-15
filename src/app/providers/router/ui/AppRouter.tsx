import React, { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesPorops, routeConfige } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRoutesPorops) => {
		const element = (
			<Suspense fallback={<PageLoader />}>
				<div className="page-wrapper">{route.element}</div>
			</Suspense>
		);

		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		);
	}, []);
	return <Routes>{Object.values(routeConfige).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
