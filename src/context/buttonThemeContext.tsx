import {createContext} from "react";


interface IButtonThemeContext {
    themeValue:'light' | 'dark';
    toggleTheme: () => void;
}


export const ThemeContext =
    createContext<IButtonThemeContext>({themeValue: 'light',toggleTheme: () => {}});