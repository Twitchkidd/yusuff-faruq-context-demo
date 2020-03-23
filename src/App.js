import React, { useState } from "react";

const Text = ({ theme }) => <h1 style={{ color: `${theme}` }}>{theme}</h1>;

const App = () => {
  const [theme, setTheme] = useState("blue");
  const onClickHandler = () => {
    setTheme(theme === "blue" ? "red" : "blue");
  };
  return (
    <div>
      <Text theme={theme} />
      <button onClick={onClickHandler}>Change theme</button>
    </div>
  );
};

export default App;
