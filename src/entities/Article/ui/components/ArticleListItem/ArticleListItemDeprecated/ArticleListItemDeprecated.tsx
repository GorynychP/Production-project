import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../ArticleListItem.module.scss';
import { useTranslation } from 'react-i18next';
import {
    ArticleBlockText,
    ArticleBlockType,
    ArticleView,
} from '../../../../model/types/article';
import { Text } from '@/shared/ui/deprecated/Text';
import EyeImage from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button } from '@/shared/ui/deprecated/Button';
import { ArticleBlockTextComponent } from '../../ArticleBlockText/ArticleBlockText';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleListItemProps } from '../ArticleListItem';

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const types = (
        <Text className={cls.types} text={article?.type.join(', ')} />
    );
    const views = (
        <>
            <EyeImage className={cls.views} />
            <Text text={String(article?.views)} />
        </>
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
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article?.user.avatar} />
                        <Text
                            className={cls.username}
                            text={article?.user.username}
                        />
                        <Text className={cls.date} text={article?.createdAt} />
                    </div>
                    <Text className={cls.title} title={article?.title} />
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
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button>{t('Читать далее ...')}</Button>
                        </AppLink>
                        {views}
                    </div>
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
                <Card>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width={200} height={220} />}
                            className={cls.image}
                            src={article?.img}
                            alt={article?.title}
                        />
                        <Text className={cls.date} text={article?.createdAt} />
                    </div>

                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text className={cls.title} title={article?.title} />
                </Card>
            </AppLink>
        </div>
    );
});
