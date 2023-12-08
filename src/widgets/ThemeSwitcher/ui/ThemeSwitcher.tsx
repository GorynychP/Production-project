import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, changeTheme } = useTheme();
	console.log('theme', theme);
	return (
		<Button
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={changeTheme}
		>
			{theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};
