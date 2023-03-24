import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { useEffect, useRef, useState } from "react";

function HomeComponent({ eng, ptbr, side, param, text, img, alt }) {
  const Navigate = useNavigate();

  const { state } = useLocation();

  const { theme: actualTheme, language: actualLangue } = state;

  const handleClick = function () {
    Navigate(param, { state: { theme: actualTheme, language: actualLangue } });
  };

  const [visible, setVisible] = useState();

  const divREF = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) =>
      setVisible(entries.isIntersecting)
    );

    observer.observe(divREF.current);
  }, []);

  return (
    <div
      className={`home_component ${side} ${
        actualTheme === "light" ? "border-light" : "border-dark"
      } ${!visible ? `go-${side}` : side}`}
      ref={divREF}
    >
      <button
        className={`btn btn_neon--light-${
          actualTheme === "light" ? "red" : "blue"
        }`}
        onClick={handleClick}
      >
        {actualLangue === "br" ? ptbr : eng}
      </button>

      <div className={`home_component--text-${side}`}>
        <p>{text}</p>
      </div>

      <img src={img} alt={alt} />
    </div>
  );
}

export default HomeComponent;
