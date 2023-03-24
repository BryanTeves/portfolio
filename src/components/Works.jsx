import React from "react";

import { useLocation } from "react-router-dom";

function Works({ jobTitle, jobStart, jobEnd, jobDescription }) {
  const { state } = useLocation();

  let { theme, language } = state || {};

  if (state === null) {
    theme = "dark";
    language = "eng";
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

export default Works;
