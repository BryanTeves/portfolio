import React from "react";

import { useLocation } from "react-router-dom";

import HomeComponent from "./HomeComponent";

import projectsIMG from "../images/projects.jpg";
import knowledgesIMG from "../images/knowledges.jpg";
import experienceIMG from "../images/experience.jpg";

function MainContent() {
  const { state } = useLocation();
  // This state contain the actual theme and language of that page

  let { theme, language } = state || {};

  if (!state) {
    theme = "dark";
    language = "eng";
  }

  return (
    <main className={`${theme === "light" ? "light-mode" : "dark-mode"} home`}>
      <div
        className={`home_info ${
          theme === "light"
            ? "border-light light-mode"
            : "border-dark dark-mode"
        }`}
      >
        <h1 className="home-title">
          {language === "br"
            ? "Bem vindo ao meu portfólio"
            : "Welcome to my portfolio"}
        </h1>
      </div>

      <HomeComponent
        ptbr={"Projetos"}
        eng={"Projects"}
        side={"left"}
        param={"/projects"}
        text={`${
          language === "br"
            ? "Confira meus projetos desde que eu comecei no mundo da programação!"
            : "Take a look at my projects since I started in the programming world!"
        }`}
        img={projectsIMG}
        alt={"projects"}
      />

      <HomeComponent
        ptbr={"Conhecimentos"}
        eng={"Knowledges"}
        side={"right"}
        param={"/knowledges"}
        text={`${
          language === "br"
            ? "Aqui você pode conhecer um pouco sobre o que eu sei e o que estou aprendendo."
            : "Here you can know more about what I know and what I'm learning."
        }`}
        img={knowledgesIMG}
        alt={"knowledges"}
      />

      <HomeComponent
        ptbr={"Expêriencia profissional"}
        eng={"Professional experience"}
        side={"left"}
        param={"/experience"}
        text={`${
          language === "br"
            ? "Todas as experiências profissionais que tive estão aqui, aproveite para deixar esta aba maior me fazendo uma proposta :)"
            : "All my professional experienses are here, be welcome to make this section bigger :)"
        }`}
        img={experienceIMG}
        alt={"experience"}
      />
    </main>
  );
}

export default MainContent;
