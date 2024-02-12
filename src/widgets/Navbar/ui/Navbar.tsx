import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from '../../LangSwitcher/ui/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getAuthData/getUserAuthData';
import { isUserAdmin, isUserModerator, userAction } from 'entities/User';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
    className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isModerator = useSelector(isUserModerator);

    const onCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsOpenModal(true);
    }, []);
    const onLogout = useCallback(() => {
        dispatch(userAction.logout());
    }, [dispatch]);
    const isAdminPanelAvailable = isAdmin || isModerator;
    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    size={TextSize.L}
                    theme={TextTheme.INVERTED}
                    title={'KEEK'}
                />

                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
                <Dropdown
                    className={cls.dropdown}
                    trigger={
                        <Avatar
                            className={cls.avatar}
                            size={35}
                            src={authData.avatar}
                        />
                    }
                    items={[
                        ...(isAdminPanelAvailable
                            ? [
                                {
                                    content: t('Админка'),
                                    href: RoutePath.admin_panel,
                                },
                            ]
                            : []),
                        {
                            content: t('Профиль'),
                            href: RoutePath.profile + authData.id,
                        },
                        { content: t('Выйти'), onClick: onLogout },
                    ]}
                    direction="bottom left"
                />
            </div>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
                className={cls.appName}
                size={TextSize.L}
                theme={TextTheme.INVERTED}
                title={'KEEK'}
            />
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang} />
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isOpenModal && (
                <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
