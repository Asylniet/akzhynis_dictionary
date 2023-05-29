import { createContext, useReducer } from "react";
import themeReducer from './ThemeReducer';

export const ThemeContext = createContext();

const initialState = {
  mode: 'light',
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
}