import { ThemeContext } from '../context/themecontext';
import { useContext } from 'react';

export const useGetTheme = () => {
    const theme = useContext(ThemeContext);
    const mode = theme.state.mode;
    const isDarkMode = theme.state.mode === 'dark';
    return { mode, isDarkMode };
}