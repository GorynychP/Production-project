import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import { useTranslation } from 'react-i18next';
import {
    ArticleView,
    ArticleBlockType,
    ArticleBlockText,
} from '../../../../model/types/article';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { ArticleBlockTextComponent } from '../../ArticleBlockText/ArticleBlockText';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleListItemProps } from '../ArticleListItem';
import EyeImage from '@/shared/assets/icons/eye.svg';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();
    console.log('article', article);
    const types = (
        <Text className={cls.types} text={article?.type.join(', ')} />
    );
    const views = (
        <HStack gap="8">
            <EyeImage className={cls.views} />
            <Text text={String(article?.views)} />
        </HStack>
    );
    if (view === ArticleView.BIG) {
        const textBlock = article?.blocks.find(
            block => block.type === ArticleBlockType.TEXT,
        ) as ArticleBlockText;
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleListItem"
            >
                <Card padding="24" border="round">
                    <VStack gap="16">
                        <HStack align="center" gap="8" className={cls.header}>
                            <Avatar size={30} src={article?.user.avatar} />
                            <Text
                                className={cls.username}
                                text={article?.user.username}
                            />
                            <Text
                                size="xl"
                                className={cls.date}
                                text={article?.createdAt}
                            />
                        </HStack>
                        <Text
                            bold
                            className={cls.title}
                            title={article?.title}
                        />
                        {types}
                        <AppImage
                            fallback={<Skeleton width={'100%'} height={340} />}
                            className={cls.image}
                            src={article?.img}
                            alt={article?.title}
                        />
                        {textBlock && (
                            <ArticleBlockTextComponent
                                className={cls.textBlock}
                                block={textBlock}
                            />
                        )}
                        <HStack justify="between" max align="center">
                            <AppLink
                                target={target}
                                to={getRouteArticleDetails(article.id)}
                            >
                                <Button theme="outline">
                                    {t('Читать далее ...')}
                                </Button>
                            </AppLink>
                            {views}
                        </HStack>
                    </VStack>
                </Card>
            </div>
        );
    }
    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
            data-testid="ArticleListItem"
        >
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                <Card border="round" padding="16">
                    <AppImage
                        fallback={<Skeleton width={200} height={220} />}
                        className={cls.image}
                        src={article?.img}
                        alt={article?.title}
                    />
                    <VStack gap="12" className={cls.wrapper}>
                        <Text
                            className={cls.title}
                            title={article?.title}
                            bold
                        />

                        <HStack
                            justify="between"
                            max
                            className={cls.infoWrapper}
                        >
                            <Text
                                className={cls.date}
                                text={article?.createdAt}
                            />
                            {views}
                        </HStack>
                        <HStack align="center" gap="8" className={cls.header}>
                            <Avatar size={30} src={article?.user.avatar} />
                            <Text
                                className={cls.username}
                                text={article?.user.username}
                            />
                        </HStack>
                    </VStack>
                </Card>
            </AppLink>
        </div>
    );
});
