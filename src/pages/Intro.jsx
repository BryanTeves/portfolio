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

  const [actualLangue, setActualLanguage] = useState();
  const [actualTheme, setActualTheme] = useState("dark");

  const [startSite, setStartSite] = useState("");

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
      }, 1600); // need to be this time because it matches with the animation time
    } else {
      return;
    }
  };

  const carouselREF = useRef();

  const goRight = function () {
    const right = (carouselREF.current.scrollLeft +=
      carouselREF.current.offsetWidth);

    return right;
  };

  const goLeft = function () {
    const left = (carouselREF.current.scrollLeft -=
      carouselREF.current.offsetWidth);

    return left;
  };

  return (
    <div className="intro-carousel" ref={carouselREF}>
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
                  actualLangue === "br" && actualTheme == "dark"
                    ? "chosen-dark"
                    : actualLangue === "br" && actualTheme == "light"
                    ? "chosen-light"
                    : ""
                }`}
              >
                Escolha sua linguagem
              </span>{" "}
              |{" "}
              <span
                className={`${
                  actualLangue === "eng" && actualTheme == "dark"
                    ? "chosen-dark"
                    : actualLangue === "eng" && actualTheme == "light"
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
                <div>{actualLangue === "br" ? "Continuar" : "Continue"}</div>
                <div>
                  <BsArrowRight className="intro_main_continue-icon icon" />
                </div>
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
            <div>
              <BsArrowLeft className="icon sub-intro_go-back-icon" />
            </div>
            <div>{actualLangue === "br" ? "Voltar" : "Go back"}</div>
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
                  tabIndex={4}
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
                  tabIndex={3}
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
