import React from "react";
import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  //creo variabile richiamando il localStorage "theme", e se non è presente inserisco "light-mode" come default
  const storedTheme = localStorage.getItem("theme") || "light-mode";
  //creo uno stato inserendo il tema di default
  const [theme, setTheme] = useState(storedTheme);

  //funzione per bottone che controlla il tema nel localStorage e lo inverte per poi salvare
  const toggleTheme = () => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  //infine, chiudo il ciclo facendo aggiornare automaticamente il tema al montaggio col primo stato creato
  useEffect(() => {
    localStorage.setItem("theme", theme);
    console.log(theme)
  }, [theme]);


  //passo al provider i valori di theme e della funzione per il bottone
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme}>{children}</div>
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
