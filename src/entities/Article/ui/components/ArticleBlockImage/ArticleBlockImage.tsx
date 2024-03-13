import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleBlockImage.module.scss';
import { ArticleBlockImage } from '../../../model/types/article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
interface ArticleBlockImageProps {
    className?: string;
    block?: ArticleBlockImage;
}

export const ArticleBlockImageComponent = memo(
    ({ className, block }: ArticleBlockImageProps) => {
        return (
            <div className={classNames(cls.ArticleBlockImage, {}, [className])}>
                <img src={block?.src} alt="Картинка" />
                {block?.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Text text={block.title} />}
                        off={<TextDeprecated text={block.title} />}
                    />
                )}
            </div>
        );
    },
);
