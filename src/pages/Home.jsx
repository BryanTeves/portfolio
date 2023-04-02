import React from "react";

import ThemeLang from "../components/ThemeLang";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import DropdownBTN from "../components/DropdownBTN";

import { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";

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
  }, []);
  // This observer is used to make some animations

  const actualWidth = window.innerWidth;

  const [size, setSize] = useState(actualWidth);

  window.addEventListener("resize", function () {
    let resizedWidth = this.window.innerWidth;
    setSize(resizedWidth);
  });
  // This block of code is uesed to make the function that will allow the menu work on mobile screens

  return (
    <>
      {size > 800 ? (
        <div
          ref={observeREF}
          className={`${visible ? "show-basic" : "hidden"}`}
        >
          <ThemeLang />
          <Header />
          <DropdownBTN />
        </div>
      ) : (
        <>
          <ThemeLang />
          <div
            ref={observeREF}
            className={`${visible ? "show-basic" : "hidden"}`}
          >
            <Header />
            <DropdownBTN />
          </div>
        </>
      )}
      <MainContent />
      <Footer />
    </>
  );
}

export default Home;
