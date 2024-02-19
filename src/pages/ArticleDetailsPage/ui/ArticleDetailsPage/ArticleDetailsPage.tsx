import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetails } from '@/entities/Article';
import { Page } from '@/widgets/Page/Page';

import { articleDetailsCommentsReducer } from '../../model/slice/articleDetailsCommentsSlice';

import { articleDetailsRecommendReducer } from '../../model/slice/articleDetailsRecommendationSlice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsCommends } from '../ArticleDetailsCommends/ArticleDetailsCommends';

interface ArticleDetailsPageProps {
    className?: string;
}
const articleCommentsReducer: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsRecommendation: articleDetailsRecommendReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    // const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    return (
        <DynamicModuleLoader
            reducers={articleCommentsReducer}
            removeAfterUnmount
        >
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <VStack gap="20" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsCommends id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
