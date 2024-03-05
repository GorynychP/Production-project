import React, { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import cls from './Navbar.module.scss';
import { useSelector } from 'react-redux';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { getUserAuthData } from '@/entities/User';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ToggleFeatures } from '@/shared/lib/features';
import { NavbarRedesigned } from '../NavbarRedesigned/NavbarRedesigned';
interface NavbarProps {
    className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const onCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsOpenModal(true);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <div className={classNames(cls.Navbar, {}, [className])}>
                        <Text
                            className={cls.appName}
                            size={TextSize.L}
                            theme={TextTheme.INVERTED}
                            title={'KEEK'}
                        />
                        <ThemeSwitcher />
                        <LangSwitcher className={cls.lang} />
                        <HStack
                            gap="16"
                            max={false}
                            align="center"
                            className={cls.actions}
                        >
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </div>
                }
                on={<NavbarRedesigned />}
            />
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
