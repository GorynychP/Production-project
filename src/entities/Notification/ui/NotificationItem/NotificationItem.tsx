import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
    className?: string;
    item?: Notification;
}

export const NotificationItem = ({
    className,
    item,
}: NotificationItemProps) => {
    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    padding="8"
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <Text title={item?.title} text={item?.descriptions} />
                </Card>
            }
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINED}
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <TextDeprecated
                        title={item?.title}
                        text={item?.descriptions}
                    />
                </CardDeprecated>
            }
        />
    );
    if (item?.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                rel="noreferrer"
                href={item.href}
            >
                {content}
            </a>
        );
    }
    return content;
};
