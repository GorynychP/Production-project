import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleBlockText.module.scss';
import { ArticleBlockText } from '../../../model/types/article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleBlockTextProps {
    className?: string;
    block?: ArticleBlockText;
}

export const ArticleBlockTextComponent = memo(
    ({ className, block }: ArticleBlockTextProps) => {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        className={classNames(cls.ArticleBlockText, {}, [
                            className,
                        ])}
                    >
                        {block?.title && (
                            <Text className={cls.title} title={block.title} />
                        )}
                        {block?.paragraphs.map(paragraph => (
                            <Text
                                key={paragraph}
                                className={cls.paragraph}
                                text={paragraph}
                            />
                        ))}
                    </div>
                }
                off={
                    <div
                        className={classNames(cls.ArticleBlockText, {}, [
                            className,
                        ])}
                    >
                        {block?.title && (
                            <TextDeprecated
                                className={cls.title}
                                title={block.title}
                            />
                        )}
                        {block?.paragraphs.map(paragraph => (
                            <TextDeprecated
                                key={paragraph}
                                className={cls.paragraph}
                                text={paragraph}
                            />
                        ))}
                    </div>
                }
            />
        );
    },
);
