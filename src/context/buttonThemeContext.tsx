import {createContext} from "react";


interface IButtonThemeContext {
    themeValue:'light' | 'dark';
    toggleTheme: () => void;
}


export const ButtonThemeContext =
    createContext<IButtonThemeContext>({themeValue: 'light',toggleTheme: () => {}});