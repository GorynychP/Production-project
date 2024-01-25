import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { Route, useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	articleDetailsCommentsReducer,
	getArticleComments,
} from '../../model/slice/ArticleDetailsCommentsSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsLoading } from 'pages/ArticleDetailsPage/model/selectors/articleDetailsComments';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';

interface ArticleDetailsPageProps {
	className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation('article-details');
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const comments = useSelector(getArticleComments.selectAll);
	const isLoading = useSelector(getArticleDetailsCommentsLoading);
	const navigate = useNavigate();
	const articleCommentsReducer: ReducersList = {
		articleDetailsComments: articleDetailsCommentsReducer,
	};
	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});
	const onSendComment = (text: string) => {
		dispatch(addCommentForArticle(text));
	};
	if (!id) {
		return (
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				Статья не найдена
			</Page>
		);
	}

	return (
		<DynamicModuleLoader reducers={articleCommentsReducer} removeAfterUnmount>
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				<Button onClick={onBackToList}>{t('Назад к списку')}</Button>
				<ArticleDetails id={id} />
				<Text className={cls.commentTitle} title={t('Комментарии')}></Text>
				<AddCommentForm onSendComment={onSendComment} />
				<CommentList isLoading={isLoading} comments={comments} />
			</Page>
		</DynamicModuleLoader>
	);
};
export default memo(ArticleDetailsPage);
