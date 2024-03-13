import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../ArticleDetails.module.scss';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { renderArticleBlock } from '../renderArticleBlock/renderArticleBlock';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '../../../model/selectors/articleDetails';
import CalendarImage from '@/shared/assets/icons/calendar.svg';
import EyeImage from '@/shared/assets/icons/eye.svg';

interface ArticleDetailsDeprecatedProps {
    className?: string;
}
/**
Устарел, используем новые компоненты с папки redesigned
 * @deprecated
 */
export const ArticleDetailsDeprecated = memo(
    ({ className }: ArticleDetailsDeprecatedProps) => {
        const article = useSelector(getArticleDetailsData);
        return (
            <VStack gap="12" max className={classNames('', {}, [className])}>
                <HStack justify="center" max>
                    <Avatar
                        className={cls.avatar}
                        src={article?.img}
                        size={200}
                    />
                </HStack>
                <VStack gap="4" max data-testid="ArticleDetails.Info">
                    <Text
                        size={TextSize.L}
                        title={article?.title}
                        text={article?.subtitle}
                    />
                    <HStack align="center" gap="8">
                        <EyeImage className={cls.icon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack align="center" gap="8">
                        <CalendarImage className={cls.icon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderArticleBlock)}
            </VStack>
        );
    },
);
