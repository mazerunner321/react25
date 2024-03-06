import React from "react";
import "./ChangeTheme.css";
import UseLocalStorage from "./LocalStorage";

const ChangeTheme = () => {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Click to change Theme!</h1>
        <button
          className="border border-gray-300 px-8 py-2 rounded-lg mt-5"
          onClick={handleToggleTheme}
        >
          Change
        </button>
      </div>
    </main>
  );
};

export default ChangeTheme;
