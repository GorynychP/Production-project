import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
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
            <VStack
                data-testid="ArticleRecommendationsList"
                gap="8"
                className={classNames(cls.ArticleRecommend, {}, [className])}
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text title={t('Рекомендуем')}></Text>}
                    off={
                        <TextDeprecated
                            title={t('Рекомендуем')}
                        ></TextDeprecated>
                    }
                />

                <ArticleList
                    target={'_blank'}
                    articles={articleRecommendList}
                    isLoading={isLoading}
                    className={cls.ArticleListRecommendation}
                />
            </VStack>
        );
    },
);
