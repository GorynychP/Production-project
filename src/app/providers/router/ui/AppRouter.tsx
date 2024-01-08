import { getUserAuthData } from 'entities/User/model/selectors/getAuthData/getUserAuthData';
import React, { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfige } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => {
	const isAuth = useSelector(getUserAuthData);
	const routes = useMemo(
		() =>
			Object.values(routeConfige).filter((route) => {
				if (route.authOnly && !isAuth) {
					return false;
				}
				return true;
			}),
		[isAuth],
	);
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{routes.map(({ element, path }) => (
					<Route
						key={path}
						path={path}
						element={<div className="page-wrapper">{element}</div>}
					/>
				))}
			</Routes>
		</Suspense>
	);
};

export default memo(AppRouter);
