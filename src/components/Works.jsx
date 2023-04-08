import React from "react";

import PropTypes from "prop-types";

import { useLocation } from "react-router-dom";

function Works({ jobTitle, jobStart, jobEnd, jobDescription }) {
  const { state } = useLocation();
  // This state contain the actual theme and language of that page

  let { theme } = state || {};

  if (!state) {
    theme = "dark";
  }

  return (
    <div className={`work`}>
      <div
        className={`work-title text-border-bottom--${
          theme === "light" ? "dark" : "light"
        }`}
      >
        <h1>{jobTitle}</h1>
        <p>
          {jobStart} - {jobEnd}
        </p>
      </div>
      <div className="work-description">
        <p>{jobDescription}</p>
      </div>
    </div>
  );
}

Works.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};

export default Works;
