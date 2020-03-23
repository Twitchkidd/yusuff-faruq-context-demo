import React, { useState } from "react";
import { Parent, ParentInButtonSequence } from "./components";

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
      <Parent theme={theme} />
      <ParentInButtonSequence setTheme={onClickHandler} />
    </div>
  );
};

export default App;
