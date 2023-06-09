import React from "react";

import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

import CV from "../docs/bryan-teves-cv.pdf";

function Header() {
  const { state } = useLocation();
  // This state contain the actual theme and language of that page

  let { theme, language } = state || {};

  if (!state) {
    theme = "dark";
    language = "eng";
  }

  const [age, setAge] = useState(null);

  useEffect(() => {
    const date = new Date();
    const born = new Date(2002, 1, 22);

    const monthDifference = date - born.getTime();

    const ageDate = new Date(monthDifference);

    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  }, []);

  // The block of code above calculate my actual age

  return (
    <header
      className={`header ${theme === "light" ? "light-mode" : "dark-mode"}`}
    >
      <div className="header_main">
        <div className="header_main-photo">
          <ul>
            <li
              className={`header_main-photo--email btn_neon--light-${
                theme === "light" ? "red" : "blue"
              }`}
            >
              <a href="mailto:bryanteves2013@hotmail.com?subject=Gostei do seu portfolio!">
                <AiOutlineMail className="icon" />
              </a>
            </li>
            <li
              className={`header_main-photo--linkedin btn_neon--light-${
                theme === "light" ? "red" : "blue"
              }`}
            >
              <a
                href="https://www.linkedin.com/in/bryan-teves-freitas-6674ba233/"
                target={"_blank"}
                rel="noreferrer"
              >
                <AiFillLinkedin className="icon" />
              </a>
            </li>
            <li
              className={`header_main-photo--github btn_neon--light-${
                theme === "light" ? "red" : "blue"
              }`}
            >
              <a
                href="https://github.com/BryanTeves"
                target={"_blank"}
                rel="noreferrer"
              >
                <AiFillGithub className="icon" />
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`header_main-text text-shadow--${
            theme === "dark" ? "light" : "dark"
          }`}
        >
          <p>
            {language === "br"
              ? `Meu nome é Bryan, tenho ${age} anos, faço faculdade de Análise e Desenvolvimento de Sistemas na UNIP e amo programar, principalmente quando se trata de FrontEnd. Eu já fiz VÁRIOS cursos e projetos para me especializar, e sempre procuro por mais aprendizado!`
              : `My name is Bryan, I'm ${age} years old, currently studying Analysis and Systems Development at the college and with a passion to program, especially when it comes to FrontEnd. I've taken MANY courses and did a LOT of projects to specialize myself, and I'm always looking for more lessons to learn!`}
          </p>

          <p>
            {language === "br"
              ? "Se você quer me conhecer um pouco melhor, conversar comigo ou ficou interessado em algo que não contei aqui, fique a vontade para me mandar um E-mail, me chamar no Linkedin ou GitHub. Aqui no portfólio coloquei apenas coisas relacionadas a programação, mas tenho muito mais a contar!"
              : "If you want to know more about me, talk with me or got interested in something that I did'nt say here, fell free to send me an E-mail, a message in my Linkedin or my GitHub. In the portfolio I only focused on tell about my programming experience, but I have a lot of another things to tell!"}
          </p>

          <p className="header_main-text--tip">
            {language === "br"
              ? "Dica: Você pode clicar nas bolinhas, elas são links :D"
              : "Tip: You can click on the float icons, they are links :D"}
          </p>

          <button
            className={`btn btn_neon--light-${
              theme === "light" ? "red" : "blue"
            }`}
          >
            <a href={CV} download="bryan-cv.pdf">
              {language === "br" ? "Baixar currículo" : "Download CV"}
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
