import React from "react";

import ThemeLang from "../components/ThemeLang";
import { useLocation } from "react-router-dom";
import PageTitle from "../components/PageTitle";

function Projects() {
  const { state } = useLocation();

  let { theme, language } = state || {};

  if (state === null) {
    theme = "dark";
    language = "eng";
  }

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
      <PageTitle title={language === "br" ? "Projetos" : "Projects"} />
      <p>proje</p>
    </>
  );
}

export default Projects;
