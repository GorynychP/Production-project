import React, { memo, useCallback, useEffect } from 'react';
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
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from '../../model/selectors/articleDetails';
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';

import CalendarImage from '@/shared/assets/icons/calendar.svg';
import EyeImage from '@/shared/assets/icons/eye.svg';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleBlockCodeComponent } from '../components/ArticleBlockCode/ArticleBlockCode';
import { ArticleBlockImageComponent } from '../components/ArticleBlockImage/ArticleBlockImage';
import { ArticleBlockTextComponent } from '../components/ArticleBlockText/ArticleBlockText';
import { HStack, VStack } from '@/shared/ui/Stack';

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
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleBlockCodeComponent
                        className={cls.block}
                        key={block.id}
                        block={block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleBlockImageComponent
                        className={cls.block}
                        block={block}
                        key={block.id}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleBlockTextComponent
                        className={cls.block}
                        key={block.id}
                        block={block}
                    />
                );
            default:
                return null;
        }
    }, []);

    let content;

    if (isLoading) {
        content = (
            <VStack max>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
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
            <>
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
                {article?.blocks.map(renderBlock)}
            </>
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
