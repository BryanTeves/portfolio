import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { useEffect, useRef, useState } from "react";

function HomeComponent({ eng, ptbr, side, param, text, img, alt }) {
  const Navigate = useNavigate();

  const { state } = useLocation();
  // This state contain the actual theme and language of that page

  let { theme: actualTheme, language: actualLangue } = state || {};
  // I used other names because when using Navigate it would get confusing and would propbably give some bugs

  if (!state) {
    actualTheme = "dark";
    actualLangue = "eng";
  }

  const handleClick = function () {
    Navigate(param, { state: { theme: actualTheme, language: actualLangue } });
    window.scrollTo(0, 0);
  };
  // This function make the user navigate to another site URL

  const [visible, setVisible] = useState();

  const divREF = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) =>
      setVisible(entries.isIntersecting)
    );

    observer.observe(divREF.current);
  }, []);
  // This observer is used to make some animations

  return (
    <div
      className={`home_component ${side} ${
        actualTheme === "light" ? "border-light" : "border-dark"
      } ${!visible ? `go-${side}` : side}`}
      ref={divREF}
    >
      <div>
        <button
          className={`btn btn_neon--light-${
            actualTheme === "light" ? "red" : "blue"
          }`}
          onClick={handleClick}
        >
          {actualLangue === "br" ? ptbr : eng}
        </button>
      </div>

      <div className={`home_component--text home_component--text-${side}`}>
        <p>{text}</p>
      </div>

      <div
        className={`home_component-image home_component-image--${side} home_component-image--border-${
          actualTheme === "light"
            ? "red box-shadow--red"
            : "blue box-shadow--blue"
        }`}
      >
        <img
          src={img}
          alt={alt}
          className={`home_component-image--img ${visible ? "" : "blur"}`}
        />
      </div>
    </div>
  );
}

export default HomeComponent;
