import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AdminPanelPage.module.scss';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const { className } = props;
    // const { t } = useTranslation();

    return (
        <Page
            data-testid={'AdminPanelPage'}
            className={classNames(cls.AdminPanelPage, {}, [className])}
        >
            AdminPanel
        </Page>
    );
});

export default AdminPanelPage;
