import React, { useContext } from "react";
import { ThemeContext } from "../context";

const themeTogglerStyle = {
  width: "200px",
  margin: "20px auto"
};

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <button
      style={themeTogglerStyle}
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}>
      Change theme!
    </button>
  );
};

export default ThemeToggler;
