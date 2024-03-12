import React, { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/Vector2.svg';
import NotificationIconDeprecated from '@/shared/assets/icons/Vector.svg';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';
interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = () => {
        setIsOpen(true);
    };
    const onCloseDrawer = () => {
        setIsOpen(false);
    };

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    width={18}
                    height={18}
                    Svg={NotificationIcon}
                    clickable
                    onClick={onOpenDrawer}
                ></Icon>
            }
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    onClick={onOpenDrawer}
                >
                    <IconDeprecated
                        Svg={NotificationIconDeprecated}
                        inverted
                    ></IconDeprecated>
                </ButtonDeprecated>
            }
        />
    );
    return (
        <>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notification} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notification} />
                        </PopoverDeprecated>
                    }
                />
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
};
