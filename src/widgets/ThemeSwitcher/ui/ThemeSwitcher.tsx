import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, changeTheme } = useTheme();
	return (
		<Button
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={changeTheme}
		>
			{theme === Theme.LIGHT ? (
				<DarkIcon className={cls.image} />
			) : (
				<LightIcon className={cls.image} />
			)}
		</Button>
	);
});
