import React from "react";
import ThemeToggler from "./ThemeToggler";

const headerStyles = {
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "space-around"
};

export const Header = () => (
  <header style={headerStyles}>
    <ThemeToggler />
  </header>
);
