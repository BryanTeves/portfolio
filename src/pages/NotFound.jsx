import React from "react";

import { useNavigate } from "react-router-dom";

function NotFound() {
  const Navigate = useNavigate();

  const handleClick = () => Navigate("/home");

  return (
    <div className="dark-mode not-found">
      <div className="not-found--content">
        <h1>Page not found | Página não encontrada!</h1>

        <button
          onClick={handleClick}
          className="btn btn_neon--light-blue not-found--btn"
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
