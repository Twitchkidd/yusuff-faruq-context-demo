import React, { useState } from "react";
import { Header, Main } from "./components";
import { ThemeContext } from "./context";

const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
