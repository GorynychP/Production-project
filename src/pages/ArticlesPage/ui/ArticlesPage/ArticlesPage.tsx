import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';

interface ArticlesPageProps {
	className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
	const { t } = useTranslation('article');

	return (
		<div className={classNames(cls.ArticlesPage, {}, [className])}>
			<ArticleList isLoading={false} view={ArticleView.SMALL} articles={[]} />
		</div>
	);
};

export default memo(ArticlesPage);
