import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";

import { GiBrazilFlag } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";
import { HiSun, HiMoon } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
    const btnSVG = e.currentTarget.dataset.btn;
    // This variable is used because SVG has some problems to handle click with target
    // Is better to handle click in SVG when using currentTarget

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
    } else if (btnSVG === "menu-open") {
      setShowMenu(true);
    } else if (btnSVG === "menu-close") {
      setShowMenu(false);
    } else return;
  };
  // This block of code make the page change the color or the language

  const location = useLocation();
  // This const is used to verify if the user is in the home page, to show or not the home button

  // const phoneSize = window.matchMedia("(max-width: 50em)").matches; // 50em == 800px

  const actualWidth = window.innerWidth;

  const [size, setSize] = useState(actualWidth);

  window.addEventListener("resize", function () {
    let resizedWidth = this.window.innerWidth;
    setSize(resizedWidth);
  });

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {size <= 800 ? (
        <>
          <div
            className={`${
              theme === "light"
                ? "light-mode box-shadow--red"
                : "dark-mode box-shadow--blue"
            } ${showMenu ? "no-show" : ""} theme-lang_menu`}
            onClick={handleClick}
            data-btn="menu-open"
          >
            <div data-btn="menu-close">
              <AiOutlineMenu className="icon" data-btn="menu-open" />
            </div>
          </div>
          <div
            className={`${!showMenu ? "no-show" : "theme-lang_menu-options"} ${
              theme === "light" ? "light-mode" : "dark-mode"
            }`}
          >
            <div
              className={`${
                theme === "light"
                  ? "light-mode box-shadow--red"
                  : "dark-mode box-shadow--blue"
              } ${!showMenu ? "no-show" : ""} theme-lang_menu`}
              onClick={handleClick}
              data-btn="menu-close"
            >
              <div data-btn="menu-close">
                <AiOutlineClose className="icon" data-btn="menu-close" />
              </div>
            </div>
            {location.pathname !== "/home" ? (
              <div
                className="theme-lang_menu-options--div"
                onClick={handleClick}
              >
                <button
                  data-btn="home"
                  className={` btn btn_neon--light-${
                    theme === "dark" ? "blue" : "red"
                  } theme-lang-div--home`}
                >
                  Home
                </button>
              </div>
            ) : (
              <span className="no-show"></span>
            )}
            <div className="theme-lang_menu-options--div" onClick={handleClick}>
              <GiBrazilFlag
                className={`icon ${
                  language === "eng" ? "hidden-basic-2" : "show-basic-2"
                }`}
              />
              <button
                data-btn="language"
                className={`theme-lang-div--btn btn btn_neon--light-${
                  theme === "dark" ? "blue" : "red"
                }`}
              >
                {language === "br" ? "Alterar o idioma" : "Change the language"}
              </button>
              <FaFlagUsa
                className={`icon ${
                  language === "br" ? "hidden-basic-2" : "show-basic-2"
                }`}
              />
            </div>
            <div className="theme-lang_menu-options--div" onClick={handleClick}>
              <HiMoon
                className={`icon ${
                  theme === "light" ? "hidden-basic-2" : "show-basic-2"
                }`}
              />
              <button
                data-btn="theme"
                className={`theme-lang-div--btn btn btn_neon--light-${
                  theme === "dark" ? "blue" : "red"
                }`}
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
          {showMenu ? (
            <div
              className="overlay"
              data-btn="menu-close"
              onClick={handleClick}
            ></div>
          ) : (
            <span className="no-show"></span>
          )}
        </>
      ) : (
        <div
          className={`${
            theme === "light" ? "light-mode" : "dark-mode"
          } theme-lang`}
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
              className={`theme-lang-div--btn btn btn_neon--light-${
                theme === "dark" ? "blue" : "red"
              }`}
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
                className={` btn btn_neon--light-${
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
              className={`theme-lang-div--btn btn btn_neon--light-${
                theme === "dark" ? "blue" : "red"
              }`}
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
      )}
    </>
  );
}

export default ThemeLang;
