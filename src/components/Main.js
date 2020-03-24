import React, { useContext } from "react";
import { ThemeContext } from "../context";
import { AppTheme } from "../Colors";

export const Main = () => {
  const themeMode = useContext(ThemeContext)[0];
  const currentThemeStyles = AppTheme[themeMode];
  return (
    <main
      style={{
        padding: "1rem",
        backgroundColor: `${currentThemeStyles.backgroundColor}`,
        color: `${currentThemeStyles.textColor}`
      }}>
      <h3>Heading!</h3>
      <p>Paragraph! Paaaaaraaaaagraph!</p>
    </main>
  );
};
