import React from "react";

import { useLocation } from "react-router-dom";

import HomeComponent from "./HomeComponent";

function MainContent() {
  const { state } = useLocation();

  let { theme, language } = state || {};

  if (state === null) {
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
            : "Take a look at my projects since I started in the programming world"
        }`}
        img={
          "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt={"projects"}
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
        img={
          "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
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
        img={
          "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt={"experience"}
      />
    </main>
  );
}

export default MainContent;
