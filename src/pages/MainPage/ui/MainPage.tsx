import React from 'react';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
const MainPage = () => {
	const { t } = useTranslation('main');
	return (
		<Page>
			<div>{t('Главная страница')}</div>
			<BugButton />
		</Page>
	);
};

export default MainPage;
