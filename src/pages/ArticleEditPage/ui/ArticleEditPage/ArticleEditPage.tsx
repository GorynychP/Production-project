import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t('Редактирование статьи №') + id
                : t('Создание новой статьи')}
        </Page>
    );
};

export default memo(ArticleEditPage);
