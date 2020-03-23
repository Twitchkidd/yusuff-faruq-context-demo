import React from "react";

export const GrandChildButton = ({ setTheme }) => (
  <button onClick={setTheme} style={{ width: "200px", margin: "20px auto" }}>
    Change theme
  </button>
);
