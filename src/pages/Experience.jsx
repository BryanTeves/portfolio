import React from "react";

import ThemeLang from "../components/ThemeLang";
import { useLocation } from "react-router-dom";

import Works from "../components/Works";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";

function Experience() {
  const { state } = useLocation();
  // This state contain the actual theme and language of that page

  let { theme, language } = state || {};

  if (!state) {
    theme = "dark";
    language = "eng";
  }

  return (
    <>
      <ThemeLang />
      <PageTitle
        title={
          language === "br"
            ? "Experiências profissionais"
            : "Professional experiences"
        }
      />
      <div
        className={`experience ${
          theme === "light" ? "light-mode" : "dark-mode"
        }`}
      >
        <div
          className={`experience_last experience_last-border--${
            theme === "light" ? "red" : "blue"
          }`}
        >
          <h1 className="experience_last-title">
            {language === "br" ? "Mais recente" : "Last experience"}
          </h1>
          <Works
            jobTitle={
              language === "br"
                ? "Especialista em relacionamento ao cliente"
                : "Customer relationship especialist"
            }
            jobStart={language === "br" ? "Dezembro de 2022" : "2022 december"}
            jobEnd={language === "br" ? "Atualmente" : "Currently at work"}
            jobDescription={
              language === "br"
                ? "Eu atuo como suporte online para pequenas e médias empresas, utilizo muitos Sistemas de Informação Gerencial, principalmente CRM (Customer Relationship Management) para prestar o devido atendimento ao cliente - maior foco em problemas relacionados a conexão de internet"
                : "I do online services to small and medium enterprises, I use a lot of CRM (Customer Relationship Management) systems to help out the job - my main focus on the job is to help in internet connection related problems"
            }
          />
        </div>

        <div className="experience_other">
          <h2>
            {language === "br"
              ? "Por enquanto, possuo apenas uma experiência relacionada a área de T.I, então essa página está meio vazia, mas não se esqueça que você pode contribuir para ela aumentar de tamanho :)"
              : "For now, I only have one experience in I.T area, so this page is a little small, but remember that you can contribute to it get bigger :)"}
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Experience;
