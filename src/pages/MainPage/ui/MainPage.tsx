import React from 'react';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
const MainPage = () => {
	const { t } = useTranslation('main');
	return (
		<div>
			<div>{t('Главная страница')}</div>
			<BugButton />
		</div>
	);
};

export default MainPage;
