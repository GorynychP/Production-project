import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}
const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 15 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));
};
export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        target,
        view = ArticleView.SMALL,
    } = props;
    const { t } = useTranslation();

    const renderArticleItem = (article: Article) => {
        return (
            <ArticleListItem
                target={target}
                className={cls.card}
                key={article.id}
                article={article}
                view={view}
            />
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text
                    title={t('Статьи не найдены')}
                    align={TextAlign.CENTER}
                    size={TextSize.L}
                />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            data-testid="ArticleList"
        >
            {articles.length > 0 ? articles.map(renderArticleItem) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
