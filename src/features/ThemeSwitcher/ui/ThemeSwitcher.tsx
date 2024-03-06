import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { changeTheme } = useTheme();
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<Icon Svg={ThemeIcon} onClick={changeTheme} clickable />}
            off={
                <ButtonDeprecated
                    className={classNames(cls.ThemeSwitcher, {}, [className])}
                    theme={ButtonTheme.CLEAR}
                    onClick={changeTheme}
                >
                    <ThemeIconDeprecated className={cls.image} />
                </ButtonDeprecated>
            }
        />
    );
});
