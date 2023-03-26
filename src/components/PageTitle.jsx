import React from "react";

import { useLocation } from "react-router-dom";

function PageTitle({ title }) {
  const { state } = useLocation();

  let { theme } = state || {};

  if (state === null) {
    theme = "dark";
  }

  return (
    <div
      className={`page-title text-shadow--${
        theme === "light"
          ? "dark light-mode border-light"
          : "light dark-mode border-dark"
      }`}
    >
      <h1>{title}</h1>
    </div>
  );
}

export default PageTitle;
