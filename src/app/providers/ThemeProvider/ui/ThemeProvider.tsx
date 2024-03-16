import React, { useState, useMemo, ReactNode, useEffect } from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}
const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    initialTheme,
}) => {
    const [theme, setTheme] = useState<Theme>(
        initialTheme || fallbackTheme || defaultTheme,
    );

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

// export default ThemeProvider;
