import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId?: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId = '' } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        userId: userData?.id || '',
        articleId,
    });
    const [reteArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                reteArticleMutation({
                    userId: userData?.id || '',
                    articleId,
                    rate: starsCount,
                    feedback,
                });
            } catch (error) {
                console.log(error);
            }
        },
        [articleId, reteArticleMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );
    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    if (isLoading) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Skeleton width={'100%'} height={120} />}
                off={<SkeletonDeprecated width={'100%'} height={120} />}
            />
        );
    }
    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t(
                'Оставьте свой отзыв о статье, это поможет улучшить качество',
            )}
            hasFeedback
            rate={rating?.rate}
        />
    );
});
export default ArticleRating;
