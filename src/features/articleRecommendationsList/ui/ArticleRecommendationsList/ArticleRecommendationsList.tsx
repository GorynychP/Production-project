import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            data: articleRecommendList,
            isLoading,
            error,
        } = useArticleRecommendationsList(4);
        if (isLoading || error || !articleRecommendList) {
            return null;
        }
        return (
            <VStack gap="8" className={classNames('', {}, [className])}>
                <Text title={t('Рекомендуем')}></Text>
                <ArticleList
                    target={'_blank'}
                    articles={articleRecommendList}
                    isLoading={isLoading}
                />
            </VStack>
        );
    },
);
