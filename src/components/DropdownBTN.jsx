import React from "react";

import { useLocation } from "react-router-dom";

import { IoMdArrowDropdown } from "react-icons/io";

function DropdownBTN() {
  const { state } = useLocation();

  const { theme } = state;

  const handleClick = function () {
    const value = window.innerHeight;

    window.scrollTo(0, value);
  };

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
