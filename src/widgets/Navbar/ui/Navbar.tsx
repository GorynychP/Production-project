import React, { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from '../../LangSwitcher/ui/LangSwitcher';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import cls from './Navbar.module.scss';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User/model/selectors/getAuthData/getUserAuthData';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
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
