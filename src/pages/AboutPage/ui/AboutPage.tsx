import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
	const { t } = useTranslation('about');
	return (
		<div>
			<div>{t('О странице')}</div>
			<div>{t('Что')}</div>
		</div>
	);
};

export default AboutPage;
