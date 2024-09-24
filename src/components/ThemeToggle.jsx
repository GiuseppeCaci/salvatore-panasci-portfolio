import React from "react";
import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";


const ThemeToggle = () => {
   //chiamo il context del tema per recuperare il tema inserito e la funzione che ne gestisce il cambio
  const { theme, toggleTheme } = useContext(ThemeContext);

  //utilizzo la funzione del bottone per il cambio tema e sulla base del tema salvato cambio l'icona
  return (
    <>
      <div onClick={toggleTheme}>
          {theme === "light-mode" ? (
            <p>light-mode</p>
          ) : (
            <p>dark-mode</p>
          )}
      </div>
    </>
  );
};

export default ThemeToggle;
