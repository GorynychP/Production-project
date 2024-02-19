import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('У вас недостаточно прав')}
            />
        </Page>
    );
};
