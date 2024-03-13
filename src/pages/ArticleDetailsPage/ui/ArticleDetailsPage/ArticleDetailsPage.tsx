import React, { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetails } from '@/entities/Article';

import { articleDetailsCommentsReducer } from '../../model/slice/articleDetailsCommentsSlice';

import { articleDetailsRecommendReducer } from '../../model/slice/articleDetailsRecommendationSlice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsCommends } from '../ArticleDetailsCommends/ArticleDetailsCommends';
import { ArticleRating } from '@/features/articleRating';
import { Page } from '@/widgets/Page';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { getRouteArticles } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button';
import { useTranslation } from 'react-i18next';
import { AdditionalInfoContainer } from '../components/AdditionalInfoContainer/AdditionalInfoContainer';
import { Card } from '@/shared/ui/redesigned/Card';

interface ArticleDetailsPageProps {
    className?: string;
}
const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsRecommendation: articleDetailsRecommendReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <StickyContentLayout
                        right={<AdditionalInfoContainer />}
                        left={
                            <Button
                                style={{ width: '100px' }}
                                onClick={onBackToList}
                            >
                                {t('Назад к списку')}
                            </Button>
                        }
                        content={
                            <Page
                                className={classNames(
                                    cls.ArticleDetailsPage,
                                    {},
                                    [className],
                                )}
                            >
                                <Card border="normal" padding="24">
                                    <VStack gap="20" max>
                                        <ArticleDetails id={id} />
                                        <ArticleRating articleId={id} />
                                        <ArticleRecommendationsList />
                                        <ArticleDetailsCommends id={id} />
                                    </VStack>
                                </Card>
                            </Page>
                        }
                    />
                }
                off={
                    <Page
                        className={classNames(cls.ArticleDetailsPage, {}, [
                            className,
                        ])}
                    >
                        <VStack gap="20" max>
                            <ArticleDetailsPageHeader />
                            <ArticleDetails id={id} />
                            <ArticleRating articleId={id} />
                            <ArticleRecommendationsList />
                            <ArticleDetailsCommends id={id} />
                        </VStack>
                    </Page>
                }
            />
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
