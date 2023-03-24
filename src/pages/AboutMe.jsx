import React from "react";

import { useLocation } from "react-router-dom";

import ThemeLang from "../components/ThemeLang";

import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function AboutMe() {
  const { state } = useLocation();

  let { theme, language } = state || {};

  if (state === null) {
    theme = "dark";
    language = "eng";
  }

  const date = new Date();
  const born = new Date(2002, 1, 22);

  const monthDifference = date - born.getTime();

  const ageDate = new Date(monthDifference);

  let age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return (
    <>
      <ThemeLang />
      <div
        className={`about_me ${theme === "light" ? "light-mode" : "dark-mode"}`}
      >
        <div className="about_me-main">
          <h1>{language === "br" ? "Sobre mim" : "About me"}</h1>

          <p>
            {language === "br"
              ? `Meu nome é Bryan, tenho ${age} anos, faço faculdade e amo programar, principalmente quando se trata de FrontEnd. Eu já fiz VÁRIOS cursos e projetos para me espcializar, e sempre procuro por mais aprendizado... Bom, acho que já falei o suficiente por aqui, a partir de agora, é melhor que você veja por si só!`
              : `My name is Bryan, I'm ${age} years old, currently studying at the college and with a passion to program, especially when it comes to FrontEnd. I've taken MANY courses and did a LOT of projects to specialize myself, and I'm always looking for more lessons, to learn... Well, I think I've said enough for now, you'd better see for yourself!`}
          </p>

          <p>
            {language === "br"
              ? "Se você quer me conhecer um pouco melhor, conversar comigo ou ficou interessado em algo que não contei aqui, fique a vontade para me mandar um E-mail, me chamar no Linkedin, ou GitHub. Aqui no portfólio coloquei apenas coisas relacionadas a programação, mas tenho muito mais a contar!"
              : "If you want to know more about me, talk with me or got interested in something that I did'nt say here, fell free to send me an E-mail, a message in my Linkedin or my GitHub. In the portfolio I only focused on tell about my programming experience, but I have a lot of another things to tell!"}
          </p>
        </div>
        <div className={`about_me-social`}>
          <div
            className={`about_me-social--email btn_neon--light-${
              theme === "light" ? "red" : "blue"
            }`}
          >
            <a href="mailto:bryanteves2013@hotmail.com?subject=Gostei do seu portfolio!">
              <AiOutlineMail className="about_me-icon icon" />
            </a>
          </div>
          <div
            className={`about_me-social--linkedin btn_neon--light-${
              theme === "light" ? "red" : "blue"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/bryan-teves-freitas-6674ba233/"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiFillLinkedin className="about_me-icon icon" />
            </a>
          </div>
          <div
            className={`about_me-social--github btn_neon--light-${
              theme === "light" ? "red" : "blue"
            }`}
          >
            <a
              href="https://github.com/BryanTeves"
              target={"_blank"}
              rel="noreferrer"
            >
              <AiFillGithub className="about_me-icon icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
