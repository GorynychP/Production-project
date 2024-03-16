import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarRedesigned.module.scss';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Text } from '@/shared/ui/redesigned/Text';
interface NavbarRedesignedProps {
    className?: string;
}
export const NavbarRedesigned = memo(({ className }: NavbarRedesignedProps) => {
    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <Text
                className={cls.appName}
                size="l"
                theme="accent"
                title={'KEEK'}
                bold
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
