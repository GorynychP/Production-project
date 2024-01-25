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
import { fetchArticleList } from '../../model/services/fetchArticlesList/fetchArticleList';
import {
	getArticlePageError,
	getArticlePageIsLoading,
	getArticlePageView,
} from '../../model/selectors/articlesPageSelector';

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
	console.log('article', article);
	const dispatch = useAppDispatch();
	useInitialEffect(() => {
		dispatch(fetchArticleList());
		dispatch(articlePageAction.initState());
	});
	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlePageAction.setView(view));
		},
		[dispatch],
	);
	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.ArticlesPage, {}, [className])}>
				<ArticleViewSelector view={view} onViewClick={onChangeView} />
				<ArticleList isLoading={isLoading} view={view} articles={article} />
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
