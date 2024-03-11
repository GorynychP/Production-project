import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../ArticleListItem.module.scss';
import cls2 from './ArticleListItemSkeleton.module.scss';
import { ArticleView } from '../../../../model/types/article';
// import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { toggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { HStack } from '@/shared/ui/deprecated/Stack';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = (
    props: ArticleListItemSkeletonProps,
) => {
    const { className, view } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });
    const Card = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => CardRedesigned,
        off: () => CardRedesigned,
    });

    if (view === ArticleView.BIG) {
        return (
            <Card
                padding="24"
                border="round"
                className={classNames(cls.ArticleListItemSkeleton, {}, [
                    className,
                    cls[view],
                ])}
            >
                <VStack gap="16">
                    <div className={cls.header}>
                        <Skeleton border="50%" height={30} width={30} />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.username}
                        />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={350} className={cls.image} />
                    <Skeleton height={100} className={cls.image} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                        <Skeleton height={36} width={80} />
                    </div>
                </VStack>
            </Card>
        );
    }
    return (
        <div
            className={classNames(cls2.ArticleListItemSkeleton, {}, [
                className,
                cls2[view],
            ])}
        >
            <Card border="round">
                <VStack gap="16" className={cls2.wrapper}>
                    <Skeleton className={cls2.image} width={200} height={150} />
                    <Skeleton className={cls2.types} width={130} height={32} />
                    <HStack justify="between" max align="center">
                        <Skeleton
                            className={cls2.title}
                            width={120}
                            height={16}
                        />
                        <Skeleton width={40} height={16} />
                    </HStack>
                    <HStack align="center" gap="8" className={cls.header}>
                        <Skeleton border="50%" height={30} width={30} />
                        <Skeleton
                            width={60}
                            height={16}
                            className={cls.username}
                        />
                    </HStack>
                </VStack>
            </Card>
        </div>
    );
};
