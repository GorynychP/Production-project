import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article/article';

interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
	const { t } = useTranslation('article-details');
	const article = useSelector(getArticleDetailsData);
	const isEdit = useSelector(getCanEditArticle);
	const navigate = useNavigate();
	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath.article_details}${article?.id}/edit`);
	}, [navigate, article?.id]);
	return (
		<div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
			<Button onClick={onBackToList}>{t('Назад к списку')}</Button>
			{isEdit ? <Button onClick={onEditArticle}>{t('Редактировать')}</Button> : null}
		</div>
	);
};
