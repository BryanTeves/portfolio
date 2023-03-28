import React from "react";

import { useLocation } from "react-router-dom";

function Footer() {
  const { state } = useLocation();
  // This state contain the actual theme and language of that page

  let { theme, language } = state || {};

  if (!state) {
    theme = "dark";
    language = "eng";
  }

  return (
    <div
      className={`footer ${
        theme === "light"
          ? "light-mode footer-border--light"
          : "dark-mode footer-border--dark"
      }`}
    >
      <div className="footer_description">
        <p className={`text-shadow--${theme === "light" ? "dark" : "light"}`}>
          {language === "br"
            ? "Este site foi feito inteiramente por mim, desde o design até as funcionalidade. Sinta-se a vontade para usar o que desejar, mas lembre-se de dar os devidos créditos."
            : "This website was made entirely by myself, from design to functionalities. Feel free to copy anything that you want, just remember to give me the credits."}
        </p>
      </div>
      <div className="footer_copyright">
        <p>Bryan Teves Freitas &#169;</p>
      </div>
    </div>
  );
}

export default Footer;
