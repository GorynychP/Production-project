import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { useTranslation } from 'react-i18next';
import {
	Article,
	ArticleBlockText,
	ArticleBlockType,
	ArticleView,
} from '../../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import EyeImage from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { ArticleBlockTextComponent } from '../ArticleBlockText/ArticleBlockText';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface ArticleListItemProps {
	className?: string;
	article?: Article;
	view: ArticleView;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
	const { className, article, view } = props;
	const { t } = useTranslation();
	const navigate = useNavigate();

	const onOpenArticle = useCallback(() => {
		navigate(RoutePath.article_details + article?.id);
	}, [navigate, article?.id]);

	const types = <Text className={cls.types} text={article?.type.join(', ')} />;
	const views = (
		<>
			<EyeImage className={cls.views} />
			<Text text={String(article?.views)} />
		</>
	);
	if (view === ArticleView.BIG) {
		const textBlock = article?.blocks.find(
			(block) => block.type === ArticleBlockType.TEXT,
		) as ArticleBlockText;
		return (
			<div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
				<Card>
					<div className={cls.header}>
						<Avatar size={30} src={article?.user.avatar} />
						<Text className={cls.username} text={article?.user.username} />
						<Text className={cls.date} text={article?.createdAt} />
					</div>
					<Text className={cls.title} title={article?.title} />
					{types}
					<img className={cls.image} src={article?.img} alt={article?.title} />
					{textBlock && (
						<ArticleBlockTextComponent
							className={cls.textBlock}
							block={textBlock}
						/>
					)}
					<div className={cls.footer}>
						<Button onClick={onOpenArticle}>{t('Читать далее ...')}</Button>{' '}
						{views}
					</div>
				</Card>
			</div>
		);
	}
	return (
		<div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
			<Card onClick={onOpenArticle}>
				<div className={cls.imageWrapper}>
					<img className={cls.image} src={article?.img} alt={article?.title} />
					<Text className={cls.date} text={article?.createdAt} />
				</div>

				<div className={cls.infiWrapper}>
					{types}
					{views}
				</div>
				<Text className={cls.title} title={article?.title} />
			</Card>
		</div>
	);
};
