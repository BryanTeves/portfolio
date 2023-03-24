import React from "react";

import { useLocation } from "react-router-dom";

import HomeComponent from "./HomeComponent";

function MainContent() {
  const { state } = useLocation();

  const { theme, language } = state;

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
            : "Take a look at my projects since I started in the programming world"
        }`}
        img={""}
        alt={""}
      />

      <HomeComponent
        ptbr={"Conhecimentos"}
        eng={"Knowledges"}
        side={"right"}
        param={"/knowledges"}
        text={`${
          language === "br"
            ? "Aqui você pode conhecer um pouco sobre o que eu sei e o que estou aprendendo"
            : "Here you can know more about what I know and what I'm learning"
        }`}
        img={""}
        alt={""}
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
        img={""}
        alt={""}
      />
    </main>
  );
}

export default MainContent;
