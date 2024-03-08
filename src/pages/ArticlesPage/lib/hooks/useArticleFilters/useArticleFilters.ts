import { ArticleView, ArticleSortField, ArticleType } from '@/entities/Article';
import {
    getArticlePageView,
    getArticlePageOrder,
    getArticlePageSort,
    getArticlePageSearch,
    getArticlePageType,
} from '../../../model/selectors/articlesPageSelector';
import { articlesPageAction } from '../../../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

export function useArticleFilters() {
    const dispatch = useAppDispatch();
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

    return {
        view,
        order,
        sort,
        search,
        type,
        onChangeView,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeType,
    };
}
