import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { routeConfige } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
	const { t } = useTranslation();
	return (
		<Suspense fallback={<div>{t('Загрузка')}...</div>}>
			<Routes>
				{Object.values(routeConfige).map(({ element, path }) => (
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
