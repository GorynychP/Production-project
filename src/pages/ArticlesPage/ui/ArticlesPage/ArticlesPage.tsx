import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initedArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilter } from '../components/ArticlesPageFilter/ArticlesPageFilter';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../components/ArticleInfiniteList/ArticleInfiniteList';
import { Page } from '@/widgets/Page';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../components/ViewSelectorContainer/ViewSelectorContainer';
import { FilterContainer } from '../components/FilterContainer/FilterContainer';

interface ArticlesPageProps {
    className?: string;
}
const reducers: ReducersList = { articlesPage: articlesPageReducer };

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    // const { t } = useTranslation('article');
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(initedArticlesPage(searchParams));
    });

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    right={<FilterContainer />}
                    left={<ViewSelectorContainer />}
                    content={
                        <Page
                            data-testid={'ArticlesPage'}
                            onScrollEnd={onLoadNextPage}
                            className={classNames(
                                cls.ArticlesPageRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <ArticleInfiniteList />
                        </Page>
                    }
                />
            }
            off={
                <Page
                    data-testid={'ArticlesPage'}
                    onScrollEnd={onLoadNextPage}
                    className={classNames(cls.ArticlesPage, {}, [className])}
                >
                    <ArticlesPageFilter />
                    <ArticleInfiniteList />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
