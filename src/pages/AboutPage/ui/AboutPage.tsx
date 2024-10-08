import React from 'react';
import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <Page data-testid={'AboutPage'}>
            <div>{t('О странице')}</div>
        </Page>
    );
};

export default AboutPage;
