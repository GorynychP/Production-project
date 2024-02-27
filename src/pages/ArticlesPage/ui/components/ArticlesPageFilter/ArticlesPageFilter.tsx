import React, { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilter.module.scss';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { articlesPageAction } from '../../../model/slices/articlesPageSlice';
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
    getArticlePageView,
} from '../../../model/selectors/articlesPageSelector';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { SortOrder } from '@/shared/types/sort';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
interface ArticlesPageFilterProps {
    className?: string;
}

export const ArticlesPageFilter = ({ className }: ArticlesPageFilterProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const view = useSelector(getArticlePageView);
    const order = useSelector(getArticlePageOrder);
    const sort = useSelector(getArticlePageSort);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);
    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    const debouncedFetchData = useDebounce(fetchData, 1000);
    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageAction.setView(view));
        },
        [dispatch],
    );
    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlesPageAction.setOrder(order));
            dispatch(articlesPageAction.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );
    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlesPageAction.setSort(sort));
            dispatch(articlesPageAction.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );
    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageAction.setSearch(search));
            dispatch(articlesPageAction.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );
    const onChangeType = useCallback(
        (type: ArticleType) => {
            dispatch(articlesPageAction.setType(type));
            dispatch(articlesPageAction.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return (
        <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
};
