import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
interface UseThemeResult {
	changeTheme: () => void;
	theme: Theme;
}
export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);
	const changeTheme = () => {
		const newTeme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme(newTeme);
		// document.body.className = newTeme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTeme);
	};

	return {
		theme,
		changeTheme,
	};
}
