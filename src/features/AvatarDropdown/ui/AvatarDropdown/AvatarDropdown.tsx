import React, { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { useTranslation } from 'react-i18next';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import {
    getRouteAdmin,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getUserAuthData,
    isUserAdmin,
    isUserModerator,
    userAction,
} from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isModerator = useSelector(isUserModerator);
    const onLogout = useCallback(() => {
        dispatch(userAction.logout());
    }, [dispatch]);
    const isAdminPanelAvailable = isAdmin || isModerator;
    if (!authData) {
        return null;
    }
    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Админка'),
                      href: getRouteAdmin(),
                  },
              ]
            : []),
        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Настройки'),
            href: getRouteSettings(),
        },
        { content: t('Выйти'), onClick: onLogout },
    ];
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    className={classNames('', {}, [className])}
                    trigger={
                        <Avatar
                            className={cls.avatar}
                            size={35}
                            src={authData.avatar}
                        />
                    }
                    items={items}
                    direction="bottom left"
                />
            }
            off={
                <DropdownDeprecated
                    className={classNames('', {}, [className])}
                    trigger={
                        <AvatarDeprecated
                            fallbackInverted
                            className={cls.avatar}
                            size={35}
                            src={authData.avatar}
                        />
                    }
                    items={items}
                    direction="bottom left"
                />
            }
        />
    );
};
