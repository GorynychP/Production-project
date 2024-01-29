import React, { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { fetchRecommendArticles } from '../../model/services/fetchRecommendArticles/fetchRecommendArticles';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

import {
	articleDetailsCommentsReducer,
	getArticleComments,
} from '../../model/slice/articleDetailsCommentsSlice';

import {
	articleDetailsRecommendReducer,
	getArticleRecommend,
} from '../../model/slice/articleDetailsRecommendationSlice';

import { getArticleDetailsCommentsLoading } from '../../model/selectors/commentsSelectors/commentsSelectors';
import { getArticleDetailsRecommendLoading } from '../../model/selectors/recommendationSelectors/recommendationSelectors';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
	className?: string;
}
const articleCommentsReducer: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
	articleDetailsRecommendation: articleDetailsRecommendReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation('article-details');
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const comments = useSelector(getArticleComments.selectAll);
	const articleRecommend = useSelector(getArticleRecommend.selectAll);
	const commentsIsLoading = useSelector(getArticleDetailsCommentsLoading);
	const recommendIsLoading = useSelector(getArticleDetailsRecommendLoading);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
		dispatch(fetchRecommendArticles());
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
				<ArticleDetailsPageHeader />
				<ArticleDetails id={id} />
				<Text className={cls.commentTitle} title={t('Рекомендуем')}></Text>
				<ArticleList
					target={'_blank'}
					className={cls.recommendList}
					articles={articleRecommend}
					isLoading={recommendIsLoading}
				/>
				<Text className={cls.commentTitle} title={t('Комментарии')}></Text>
				<AddCommentForm onSendComment={onSendComment} />
				<CommentList isLoading={commentsIsLoading} comments={comments} />
			</Page>
		</DynamicModuleLoader>
	);
};
export default memo(ArticleDetailsPage);
