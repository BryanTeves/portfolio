import React from "react";

import { useLocation } from "react-router-dom";

import { IoMdArrowDropdown } from "react-icons/io";

function DropdownBTN() {
  const { state } = useLocation();
  // This state contain the actual theme and language of that page

  let { theme } = state || {};

  if (!state) {
    theme = "dark";
  }

  const handleClick = function () {
    const scrollPosition = window.innerHeight;

    window.scrollTo({
      top: scrollPosition,
      left: 0,
      behavior: "smooth",
    });
  };
  // This function change the current position of the site

  return (
    <div
      className={`dropdown_div ${
        theme === "light" ? "light-mode" : "dark-mode"
      }`}
      onClick={handleClick}
    >
      <IoMdArrowDropdown
        className={`dropdown-btn icon-dropdown btn_neon--light-${
          theme === "light" ? "red" : "blue"
        }`}
      />
    </div>
  );
}

export default DropdownBTN;
