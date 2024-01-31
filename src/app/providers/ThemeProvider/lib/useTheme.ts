import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
interface UseThemeResult {
	changeTheme: () => void;
	theme: Theme;
}
export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)
    const changeTheme = () => {
        let newTheme: Theme
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT
            break
        case Theme.LIGHT:
            newTheme = Theme.NEW_THEME
            break
        case Theme.NEW_THEME:
            newTheme = Theme.DARK
            break
        default:
            newTheme = Theme.LIGHT
        }
        setTheme?.(newTheme)
        // document.body.className = newTeme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme: theme || Theme.LIGHT,
        changeTheme
    }
}
