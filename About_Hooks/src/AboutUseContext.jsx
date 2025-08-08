import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemedText() {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === "light" ? "black" : "light");
  };

  return (
    <>
      <div
        style={{
          color: theme === "light" ? "black" : "white",
          background: theme === "light" ? "white" : "black",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        Theme is: {theme}
      </div>
      <br />
      <button onClick={changeTheme}>Change Theme</button>
    </>
  );
}

function ThemeProvider({ children }) {
  const themeState = useState("light");
  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemedText };
