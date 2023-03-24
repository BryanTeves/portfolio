import React from "react";

import ThemeLang from "../components/ThemeLang";
import { useLocation } from "react-router-dom";

function Experience() {
  const { state } = useLocation();

  let { theme, language } = state;

  return (
    <>
      <ThemeLang />
      <p>xp</p>
    </>
  );
}

export default Experience;
