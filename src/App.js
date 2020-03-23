import React, { useState } from "react";

const Text = ({ theme }) => (
  <h1 style={{ color: `${theme}`, textAlign: "center" }}>{theme}</h1>
);

const App = () => {
  const [theme, setTheme] = useState("blue");
  const onClickHandler = () => {
    setTheme(theme === "blue" ? "red" : "blue");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "space-around"
      }}>
      <Text theme={theme} />
      <button
        onClick={onClickHandler}
        style={{ width: "200px", margin: "20px auto" }}>
        Change theme
      </button>
    </div>
  );
};

export default App;
