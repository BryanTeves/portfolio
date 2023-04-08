import React from "react";

import PropTypes from "prop-types";

import { useLocation } from "react-router-dom";

function PageTitle({ title }) {
  const { state } = useLocation();
  // This state contain the actual theme and language of that page

  let { theme } = state || {};

  if (!state) {
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

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
