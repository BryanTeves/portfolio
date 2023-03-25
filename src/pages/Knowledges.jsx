import React from "react";

import ThemeLang from "../components/ThemeLang";
import { useLocation } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";

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
            className={`knowledges-images knowledges_advanced-images knowledges-border--${
              theme === "light" ? "red" : "blue"
            }`}
          ></div>
        </div>

        <div className="knowledges_intermediary">
          <h1>{language == "br" ? "Intermediário" : "Intermediary"}</h1>

          <h2>C | C# | NodeJS | SQL</h2>

          <div
            className={`knowledges-images knowledges_intermediary-images knowledges-border--${
              theme === "light" ? "red" : "blue"
            }`}
          ></div>
        </div>

        <div className="knowledges_basic">
          <h1>{language == "br" ? "Básico" : "Basic"}</h1>

          <h2>Python</h2>

          <div
            className={`knowledges-images knowledges_basic-images knowledges-border--${
              theme === "light" ? "red" : "blue"
            }`}
          ></div>
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
