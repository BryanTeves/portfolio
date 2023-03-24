import React from "react";

import ThemeLang from "../components/ThemeLang";
import { useLocation } from "react-router-dom";

function Projects() {
  const { state } = useLocation();

  let { theme, language } = state;

  /* import { useContext, useEffect } from "react";

import ProjectsContext from "../context/ProjectsContext"; */

  /*   const { projects } = useContext(ProjectsContext);

  useEffect(() => {
    const fetchData = async () => {
      const project = await projects(1);
    };
    fetchData();
  }, []);

  console.log(projects); */

  return (
    <>
      <ThemeLang />
      <p>proje</p>
    </>
  );
}

export default Projects;
