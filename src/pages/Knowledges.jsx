import React from "react";

import ThemeLang from "../components/ThemeLang";
import { useLocation } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";

import JS from "../images/javascript.png";
import react from "../images/react.png";
import css from "../images/css.png";
import html from "../images/html.png";
import C from "../images/c.png";
import CSharp from "../images/csharp.png";
import nodejs from "../images/nodejs.jpg";
import SQL from "../images/sql.png";
import python from "../images/python.jpg";

function Knowledges() {
  const { state } = useLocation();

  let { theme, language } = state || {};

  if (state === null) {
    theme = "dark";
    language = "eng";
  }

  return (
    <>
      <ThemeLang />
      <PageTitle
        title={language === "br" ? "Meus conhecimentos" : "My knowledges"}
      />
      <div
        className={`knowledges ${
          theme === "light" ? "light-mode" : "dark-mode"
        }`}
      >
        <div className="knowledges_advanced">
          <h1>{language === "br" ? "Avançado" : "Advanced"}</h1>

          <h2>JavaScript | React | CSS-SASS | HTML5</h2>

          <div
            className={`knowledges-images knowledges-border--${
              theme === "light" ? "red" : "blue"
            }`}
          >
            <img
              src={JS}
              alt="JavaScript"
              className="img-left--radius knowledges-images--advanced"
            />
            <img
              src={react}
              alt="React"
              className="knowledges-images--advanced"
            />
            <img src={css} alt="Css" className="knowledges-images--advanced" />
            <img
              src={html}
              alt="html"
              className="img-right--radius knowledges-images--advanced"
            />
          </div>
        </div>

        <div className="knowledges_intermediary">
          <h1>{language == "br" ? "Intermediário" : "Intermediary"}</h1>

          <h2>C | C# | NodeJS | SQL</h2>

          <div
            className={`knowledges-images knowledges-border--${
              theme === "light" ? "red" : "blue"
            }`}
          >
            <img
              src={C}
              alt="C"
              className="img-left--radius knowledges-images--intermediary"
            />
            <img
              src={CSharp}
              alt="C#"
              className="knowledges-images--intermediary"
            />
            <img
              src={nodejs}
              alt="nodeJS"
              className="knowledges-images--intermediary"
            />
            <img
              src={SQL}
              alt="SQL"
              className="img-right--radius knowledges-images--intermediary"
            />
          </div>
        </div>

        <div className="knowledges_basic">
          <h1>{language == "br" ? "Básico" : "Basic"}</h1>

          <h2>Python</h2>

          <div
            className={`knowledges-images knowledges-border--${
              theme === "light" ? "red" : "blue"
            }`}
          >
            <img
              src={python}
              alt="Python"
              className="knowledges-images--basic img-right--radius img-left--radius"
            />
          </div>
        </div>

        <div
          className={`knowledges_other text-shadow--${
            theme === "light" ? "dark" : "light"
          }`}
        >
          <p>
            {language === "br"
              ? "Sempre estou estudando e procurando conhecer coisas novas. Mesmo se eu não souber algo, vou atrás, pesquiso e aprendo, até dominar aquilo"
              : "I'm always looking to know more and learn new features. Even if I don't know something, I'll search, study, till domain that"}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Knowledges;
