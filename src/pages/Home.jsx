import React from "react";

import ThemeLang from "../components/ThemeLang";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import DropdownBTN from "../components/DropdownBTN";

import { useEffect, useState, useRef, useCallback } from "react";
import Footer from "../components/Footer";

const MOBILE_SCREEN_SIZE = 800;

function Home() {
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

    return () => observer.disconnect();
  }, []);
  // This observer is used to make some animations

  const handleResize = useCallback(() => {
    setSize(window.innerWidth);
  }, []);
  // this callback is used to make the resize cleaner

  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  // This block of code is uesed to make the function that will allow the menu work on mobile screens

  const basicContent = (
    <>
      <Header />
      <DropdownBTN />
    </>
  );

  return (
    <>
      {size > MOBILE_SCREEN_SIZE ? (
        <div
          ref={observeREF}
          className={`${visible ? "show-basic" : "hidden"}`}
        >
          <ThemeLang />
          {basicContent}
        </div>
      ) : (
        <>
          <ThemeLang />
          <div
            ref={observeREF}
            className={`${visible ? "show-basic" : "hidden"}`}
          >
            {basicContent}
          </div>
        </>
      )}
      <MainContent />
      <Footer />
    </>
  );
}

export default Home;
