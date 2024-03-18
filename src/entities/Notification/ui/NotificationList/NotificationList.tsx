import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/deprecated/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;

    const { data: notifications, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        gap="12"
                        max={false}
                        className={classNames(cls.NotificationList, {}, [
                            className,
                        ])}
                    >
                        {new Array(4).fill(0).map((_, index) => (
                            <Skeleton
                                key={index}
                                border="8px"
                                width={'100%'}
                                height={70}
                            />
                        ))}
                    </VStack>
                }
                off={
                    <VStack
                        gap="12"
                        max={false}
                        className={classNames(cls.NotificationList, {}, [
                            className,
                        ])}
                    >
                        {new Array(3).fill(0).map((_, index) => (
                            <SkeletonRedesigned
                                key={index}
                                border="8px"
                                width={'100%'}
                                height={70}
                            />
                        ))}
                    </VStack>
                }
            />
        );
    }
    return (
        <VStack
            gap="12"
            max={false}
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {notifications?.map(item => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
