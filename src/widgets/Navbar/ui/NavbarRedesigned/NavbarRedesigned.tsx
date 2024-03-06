import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarRedesigned.module.scss';
import { Text, TextSize, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
interface NavbarRedesignedProps {
    className?: string;
}
export const NavbarRedesigned = memo(({ className }: NavbarRedesignedProps) => {
    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <Text
                className={cls.appName}
                size={TextSize.L}
                theme={TextTheme.INVERTED}
                title={'KEEK'}
            />
            <HStack gap="16" max={false} align="center" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
            <LangSwitcher className={cls.lang} />
            <ThemeSwitcher />
        </header>
    );
});
