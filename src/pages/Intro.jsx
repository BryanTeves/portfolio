import { useRef, useState, useEffect } from "react";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { HiSun, HiMoon } from "react-icons/hi";

import { useNavigate } from "react-router-dom";

function Intro() {
  const divREF = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) =>
      setVisible(entries.isIntersecting)
    );

    observer.observe(divREF.current);
  }, [divREF]);
  // This observer is used to make some animations

  const [actualLangue, setActualLanguage] = useState();
  const [actualTheme, setActualTheme] = useState("dark");
  // These states are used to change the theme and the language

  const [startSite, setStartSite] = useState("");
  // This state is used to start the intro transition to the home page

  const [carousel, setCarousel] = useState();
  // This state is used to make the carousel work

  const Navigate = useNavigate();

  const handleClick = function (e) {
    const { btn } = e.target.dataset;

    if (btn === "br") {
      setActualLanguage("br");
    } else if (btn === "eng") {
      setActualLanguage("eng");
    } else if (btn === "light") {
      setActualTheme("light");
    } else if (btn === "dark") {
      setActualTheme("dark");
    } else if (btn === "start") {
      setStartSite("hidden");
      setTimeout(() => {
        Navigate("/home", {
          state: { theme: actualTheme, language: actualLangue },
        });
      }, 1300); // Need to be this time because it matches with the animation time
    } else {
      return;
    }
  };
  // This block of code change the theme, language and make the user go to the home page

  const carousselTranslateGO = {
    transform: `translateX(-50%)`,
  };

  const carousselTranslateBACK = {
    transform: `translateX(0%)`,
  };

  // Tehe variables are used to save the translate option to the carousel

  const goRight = function () {
    setCarousel(carousselTranslateGO);
  };
  // Make the carousel go right

  const goLeft = function () {
    setCarousel(carousselTranslateBACK);
  };
  // Make the carousel go left

  return (
    <div className="intro-carousel" style={carousel}>
      <div className="intro">
        <div
          className={`intro_main ${visible ? "show" : "hidden"} ${
            actualTheme === "light" ? "light-mode" : "dark-mode"
          }`}
          ref={divREF}
        >
          <div
            className={`intro_main-title ${
              visible ? "show-basic" : "hidden-basic"
            }`}
          >
            <h1>
              <span
                className={`${
                  actualLangue === "br" && actualTheme === "dark"
                    ? "chosen-dark"
                    : actualLangue === "br" && actualTheme === "light"
                    ? "chosen-light"
                    : ""
                }`}
              >
                Escolha sua linguagem
              </span>{" "}
              |{" "}
              <span
                className={`${
                  actualLangue === "eng" && actualTheme === "dark"
                    ? "chosen-dark"
                    : actualLangue === "eng" && actualTheme === "light"
                    ? "chosen-light"
                    : ""
                }`}
              >
                Choose your language
              </span>
            </h1>
          </div>

          <div
            className={`intro_main_list ${visible ? "show-basic" : "hidden"}`}
            onClick={handleClick}
          >
            <ul className={`intro_main_list-ul`}>
              <li className={`intro_main_list-li`}>
                <button
                  className={`btn intro_main-btn ${
                    actualTheme === "light"
                      ? "btn_neon--light-red"
                      : "btn_neon--light-blue"
                  }`}
                  data-btn="br"
                  tabIndex={1}
                >
                  Português BR
                </button>
              </li>

              <li className={`intro_main_list-li`}>
                <button
                  className={`btn intro_main-btn ${
                    actualTheme === "light"
                      ? "btn_neon--light-red"
                      : "btn_neon--light-blue"
                  }`}
                  data-btn="eng"
                  tabIndex={2}
                >
                  English USA
                </button>
              </li>
            </ul>
          </div>

          <div
            className={`intro_main_continue ${
              !actualLangue ? "hidden-basic" : "show-basic"
            }`}
          >
            <div className="intro_main_continue-text" onClick={goRight}>
              <button
                className={`intro_main_continue-btn btn ${
                  actualTheme === "light"
                    ? "btn_neon--light-red"
                    : "btn_neon--light-blue"
                }`}
                tabIndex={3}
              >
                {actualLangue === "br" ? "Continuar" : "Continue"}

                <BsArrowRight className="intro_main_continue-icon icon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sub-intro  ${
          actualTheme === "light" ? "light-mode" : "dark-mode"
        } ${startSite}`}
      >
        <div className="sub-intro_go-back">
          <button
            className={`btn ${
              actualTheme === "light"
                ? "btn_neon--light-red"
                : "btn_neon--light-blue"
            } sub-intro_go-back-btn`}
            onClick={goLeft}
            tabIndex={5}
          >
            <BsArrowLeft className="icon sub-intro_go-back-icon" />

            {actualLangue === "br" ? "Voltar" : "Go back"}
          </button>
        </div>
        <div
          className={`sub-intro_main ${
            actualTheme === "light" ? "light-mode" : "dark-mode"
          } `}
        >
          <div className="sub-intro_main-title">
            <h1>
              {actualLangue === "br"
                ? "Escolha o modo de cor que preferir"
                : "Choose the color mode you like most"}
            </h1>
          </div>

          <div className="sub-intro_main-list" onClick={handleClick}>
            <ul className="sub-intro_main-list-ul">
              <li className="sub-intro_main-list-li">
                <button
                  className={`btn ${
                    actualTheme === "light"
                      ? "btn_neon--light-red"
                      : "btn_neon--light-blue"
                  } sub-intro_main-list-btn`}
                  data-btn="dark"
                  tabIndex={3}
                >
                  <HiMoon className="icon icon-moon sub-intro_main-list-icon" />

                  <div data-btn="dark">
                    {actualLangue === "br" ? "Modo escuro" : "Dark mode"}
                  </div>
                </button>
              </li>

              <li>
                <button
                  className={`btn ${
                    actualTheme === "light"
                      ? "btn_neon--light-red"
                      : "btn_neon--light-blue"
                  } sub-intro_main-list-btn`}
                  data-btn="light"
                  tabIndex={4}
                >
                  <HiSun className="icon icon-moon sub-intro_main-list-icon" />

                  <div data-btn="light">
                    {actualLangue === "br" ? "Modo claro" : "Light mode"}
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="sub-intro_continue" onClick={handleClick}>
          <div>
            <button
              className={`btn sub-intro_continue-btn ${
                actualTheme === "light"
                  ? "btn_neon--light-red"
                  : "btn_neon--light-blue"
              }`}
              data-btn="start"
            >
              {actualLangue === "br" ? "Começar" : "Start"}

              <BsArrowRight
                className="icon sub-intro_continue-icon"
                data-btn="start"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
