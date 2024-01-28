import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleList } from 'entities/Article';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageReducer, getArticle } from '../../model/slices/articlePageSlice';
import {
	getArticlePageError,
	getArticlePageIsLoading,
	getArticlePageView,
} from '../../model/selectors/articlesPageSelector';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initedArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';
import { useSearchParams } from 'react-router-dom';

interface ArticlesPageProps {
	className?: string;
}
const reducers: ReducersList = { articlesPage: articlePageReducer };

const ArticlesPage = ({ className }: ArticlesPageProps) => {
	const { t } = useTranslation('article');
	const articles = useSelector(getArticle.selectAll);
	const isLoading = useSelector(getArticlePageIsLoading);
	const error = useSelector(getArticlePageError);
	const view = useSelector(getArticlePageView);
	const [searchParams] = useSearchParams();
	const dispatch = useAppDispatch();
	useInitialEffect(() => {
		dispatch(initedArticlesPage(searchParams));
	});

	const onLoadNextPage = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<Page
				onScrollEnd={onLoadNextPage}
				className={classNames(cls.ArticlesPage, {}, [className])}
			>
				<ArticlesPageFilter />
				<ArticleList
					className={cls.list}
					isLoading={isLoading}
					view={view}
					articles={articles}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
