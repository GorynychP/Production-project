import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';
import { memo } from 'react';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';

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
            <VStack
                gap="12"
                max={false}
                className={classNames(cls.NotificationList, {}, [className])}
            >
                {new Array(3).fill(0).map((_, index) => (
                    <Skeleton
                        key={index}
                        border="8px"
                        width={'100%'}
                        height={70}
                    />
                ))}
            </VStack>
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
