import React from "react";

import ThemeLang from "../components/ThemeLang";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import DropdownBTN from "../components/DropdownBTN";

import { useLocation } from "react-router-dom";

import { useEffect, useState, useRef } from "react";

function Home() {
  const { state } = useLocation();

  let { theme, language } = state;

  const observeREF = useRef();

  const [visible, setVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      setVisible(entries.isIntersecting);

      if (entries.isIntersecting === false) {
        setVisible(true);
        observer.disconnect(observeREF.current);
      }
    });

    observer.observe(observeREF.current);
  }, []);

  return (
    <>
      <div ref={observeREF} className={`${visible ? "show-basic" : "hidden"}`}>
        <ThemeLang />
        <Header />
        <DropdownBTN />
      </div>
      <MainContent />
    </>
  );
}

export default Home;
