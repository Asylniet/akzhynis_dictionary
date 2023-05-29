import { useContext } from "react";
import { ThemeContext } from "../context/themecontext";
import { useGetTheme } from "../hooks/useGetTheme";

const SwitchButton = () => {
    const theme = useContext(ThemeContext);
    const { mode, isDarkMode } = useGetTheme();
  
    const onClick = () => {
      if (isDarkMode) {
        theme.dispatch({ mode: "light" });
      } else {
        theme.dispatch({ mode: "dark" });
      }
    };
  
    return (
      <button className={`btn btn-${mode}`} onClick={onClick}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    );
}

export default SwitchButton;