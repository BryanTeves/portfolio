import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { GiBrazilFlag } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";

function ThemeLang() {
  const { state } = useLocation();
  // This state contain the actual theme and language of that page

  let { theme, language } = state || {};

  if (!state) {
    theme = "dark";
    language = "eng";
  }

  const Navigate = useNavigate();

  const handleClick = function (e) {
    const { btn } = e.target.dataset;

    if (btn === "language" && language === "br") {
      Navigate("", { state: { theme: theme, language: "eng" } });
    } else if (btn === "language" && language === "eng") {
      Navigate("", { state: { theme: theme, language: "br" } });
    } else if (btn === "theme" && theme === "dark") {
      Navigate("", { state: { theme: "light", language: language } });
    } else if (btn === "theme" && theme === "light") {
      Navigate("", { state: { theme: "dark", language: language } });
    } else if (btn === "home") {
      Navigate("/home", { state: { theme: theme, language: language } });
    } else {
      return;
    }
  };
  // This block of code make the page change the color or the language

  const location = useLocation();
  // This const is used to verify if the user is in the home page, to show or not the home button

  return (
    <div
      className={`${theme === "light" ? "light-mode" : "dark-mode"} theme-lang`}
      onClick={handleClick}
    >
      <div className="theme-lang-div">
        <GiBrazilFlag
          className={`icon ${
            language === "eng" ? "hidden-basic-2" : "show-basic-2"
          }`}
        />
        <button
          data-btn="language"
          className={`btn btn_neon--light-${theme === "dark" ? "blue" : "red"}`}
        >
          {language === "br" ? "Alterar o idioma" : "Change the language"}
        </button>
        <FaFlagUsa
          className={`icon ${
            language === "br" ? "hidden-basic-2" : "show-basic-2"
          }`}
        />
      </div>
      {location.pathname !== "/home" ? (
        <div className="theme-lang-div">
          <button
            data-btn="home"
            className={`btn btn_neon--light-${
              theme === "dark" ? "blue" : "red"
            } theme-lang-div--home`}
          >
            Home
          </button>
        </div>
      ) : (
        <span className="theme-lang-div"></span>
      )}
      <div className="theme-lang-div">
        <HiMoon
          className={`icon ${
            theme === "light" ? "hidden-basic-2" : "show-basic-2"
          }`}
        />
        <button
          data-btn="theme"
          className={`btn btn_neon--light-${theme === "dark" ? "blue" : "red"}`}
        >
          {language === "br" ? "Mudar o tema" : "Change theme"}
        </button>
        <HiSun
          className={`icon ${
            theme === "dark" ? "hidden-basic-2" : "show-basic-2"
          }`}
        />
      </div>
    </div>
  );
}

export default ThemeLang;
