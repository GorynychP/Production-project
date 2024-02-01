import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from '../../model/selectors/articleDetails';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import CalendarImage from 'shared/assets/icons/calendar.svg';
import EyeImage from 'shared/assets/icons/eye.svg';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleBlockCodeComponent } from '../components/ArticleBlockCode/ArticleBlockCode';
import { ArticleBlockImageComponent } from '../components/ArticleBlockImage/ArticleBlockImage';
import { ArticleBlockTextComponent } from '../components/ArticleBlockText/ArticleBlockText';

interface ArticleDetailsProps {
    className?: string;
    id: string;
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
            <div>
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
            </div>
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
                <div className={cls.avatarWrapper}>
                    <Avatar
                        className={cls.avatar}
                        src={article?.img}
                        size={200}
                    />
                </div>
                <Text
                    size={TextSize.L}
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                />
                <div className={cls.arcticleInfo}>
                    <EyeImage className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.arcticleInfo}>
                    <CalendarImage className={cls.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDitails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
