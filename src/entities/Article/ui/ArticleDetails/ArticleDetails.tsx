import React, { memo, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsError,
    getArticleDetailsLoading,
} from '../../model/selectors/articleDetails';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned/ArticleDetailsRedesigned';
import { ArticleDetailsDeprecated } from './ArticleDetailsDeprecated/ArticleDetailsDeprecated';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const initialReducers: ReducersList = {
        articleDetails: articleDetailsReducer,
    };
    const isLoading = useSelector(getArticleDetailsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack max>
                        <Skeleton
                            className={cls.avatar}
                            width={200}
                            height={200}
                            border="50%"
                        />
                        <Skeleton
                            className={cls.title}
                            width={300}
                            height={32}
                        />
                        <Skeleton
                            className={cls.skeleton}
                            width={600}
                            height={24}
                        />
                        <Skeleton
                            className={cls.skeleton}
                            width={'100%'}
                            height={200}
                        />
                        <Skeleton
                            className={cls.skeleton}
                            width={'100%'}
                            height={200}
                        />
                    </VStack>
                }
                off={
                    <VStack max>
                        <SkeletonDeprecated
                            className={cls.avatar}
                            width={200}
                            height={200}
                            border="50%"
                        />
                        <SkeletonDeprecated
                            className={cls.title}
                            width={300}
                            height={32}
                        />
                        <SkeletonDeprecated
                            className={cls.skeleton}
                            width={600}
                            height={24}
                        />
                        <SkeletonDeprecated
                            className={cls.skeleton}
                            width={'100%'}
                            height={200}
                        />
                        <SkeletonDeprecated
                            className={cls.skeleton}
                            width={'100%'}
                            height={200}
                        />
                    </VStack>
                }
            />
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке статьи')}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ArticleDetailsRedesigned />}
                off={<ArticleDetailsDeprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <VStack
                max
                gap="16"
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
