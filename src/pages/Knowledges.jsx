import React from "react";

import ThemeLang from "../components/ThemeLang";
import { useLocation } from "react-router-dom";

function Knowledges() {
  const { state } = useLocation();

  let { theme, language } = state;

  return (
    <>
      <ThemeLang />
      <p>know</p>
    </>
  );
}

export default Knowledges;
