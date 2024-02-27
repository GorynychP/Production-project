import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { useSelector } from 'react-redux';
import { getArticle } from '../../../model/slices/articlesPageSlice';
import {
    getArticlePageError,
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../../model/selectors/articlesPageSelector';
import { Text, TextTheme } from '@/shared/ui/Text';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = ({
    className,
}: ArticleInfiniteListProps) => {
    const { t } = useTranslation();
    const articles = useSelector(getArticle.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView);
    if (error) {
        return (
            <Text theme={TextTheme.ERROR} title={t('Ошибка загрузки дынных')} />
        );
    }

    return (
        <ArticleList
            className={className}
            isLoading={isLoading}
            view={view}
            articles={articles}
        />
    );
};
