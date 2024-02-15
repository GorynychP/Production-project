import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/Vector.svg';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted></Icon>
                </Button>
            }
        >
            <NotificationList className={cls.notification} />
        </Popover>
    );
};
