import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleList, ArticleViewSelector } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	articlePageAction,
	articlePageReducer,
	getArticle,
} from '../../model/slices/articlePageSlice';
import {
	getArticlePageError,
	getArticlePageIsLoading,
	getArticlePageView,
} from '../../model/selectors/articlesPageSelector';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initedArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';

interface ArticlesPageProps {
	className?: string;
}
const reducers: ReducersList = { articlesPage: articlePageReducer };

const ArticlesPage = ({ className }: ArticlesPageProps) => {
	const { t } = useTranslation('article');
	const article = useSelector(getArticle.selectAll);
	const isLoading = useSelector(getArticlePageIsLoading);
	const error = useSelector(getArticlePageError);
	const view = useSelector(getArticlePageView);
	const dispatch = useAppDispatch();
	useInitialEffect(() => {
		dispatch(initedArticlesPage());
	});

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlePageAction.setView(view));
		},
		[dispatch],
	);

	const onLoadNextPage = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<Page
				onScrollEnd={onLoadNextPage}
				className={classNames(cls.ArticlesPage, {}, [className])}
			>
				<ArticleViewSelector view={view} onViewClick={onChangeView} />
				<ArticleList isLoading={isLoading} view={view} articles={article} />
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
