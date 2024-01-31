import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageFilter.module.scss';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    ArticleSortField,
    ArticleSortSelector,
    ArticleTypeTabs,
    ArticleView,
    ArticleViewSelector,
} from 'entities/Article';
import { articlePageAction } from '../../model/slices/articlePageSlice';
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
    getArticlePageView,
} from '../../model/selectors/articlesPageSelector';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleType } from 'entities/Article/model/types/article';
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
            dispatch(articlePageAction.setView(view));
        },
        [dispatch],
    );
    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlePageAction.setOrder(order));
            dispatch(articlePageAction.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );
    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlePageAction.setSort(sort));
            dispatch(articlePageAction.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );
    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageAction.setSearch(search));
            dispatch(articlePageAction.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );
    const onChangeType = useCallback(
        (type: ArticleType) => {
            dispatch(articlePageAction.setType(type));
            dispatch(articlePageAction.setPage(1));
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
