import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { changeTheme } = useTheme();
    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={changeTheme}
        >
            <ThemeIcon className={cls.image} />
        </Button>
    );
});
