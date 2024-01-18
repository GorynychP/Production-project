import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleBlockImage.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleBlockImage } from '../../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
interface ArticleBlockImageProps {
	className?: string;
	block?: ArticleBlockImage;
}

export const ArticleBlockImageComponent = memo(
	({ className, block }: ArticleBlockImageProps) => {
		const { t } = useTranslation();

		return (
			<div className={classNames(cls.ArticleBlockImage, {}, [className])}>
				<img src={block?.src} alt="Картинка" />
				{block?.title && <Text text={block.title} />}
			</div>
		);
	},
);
