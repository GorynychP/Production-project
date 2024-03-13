import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsData } from '../../../model/selectors/articleDetails';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useSelector } from 'react-redux';
import { renderArticleBlock } from '../renderArticleBlock/renderArticleBlock';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import cls from './ArticleDetailsRedesigned.module.scss';
interface ArticleDetailsRedesignedProps {
    className?: string;
}

export const ArticleDetailsRedesigned = memo(
    ({ className }: ArticleDetailsRedesignedProps) => {
        const article = useSelector(getArticleDetailsData);

        return (
            <VStack gap="12" max className={classNames('', {}, [className])}>
                <VStack gap="16" max data-testid="ArticleDetails.Info">
                    <Text size="xl" title={article?.title} bold />
                    <Text size="m" text={article?.subtitle} bold />
                    <AppImage
                        className={cls.img}
                        fallback={
                            <Skeleton
                                width={'100%'}
                                height={420}
                                border="16px"
                            />
                        }
                        src={article?.img}
                    />
                </VStack>
                {article?.blocks.map(renderArticleBlock)}
            </VStack>
        );
    },
);
