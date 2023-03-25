import React from "react";

import ThemeLang from "../components/ThemeLang";
import PageTitle from "../components/PageTitle";

import { useLocation } from "react-router-dom";

import { useContext, useEffect, useState } from "react";

import ProjectsContext from "../context/ProjectsContext";
import Footer from "../components/Footer";

function Projects() {
  const { state } = useLocation();

  let { theme, language } = state || {};

  if (state === null) {
    theme = "dark";
    language = "eng";
  }

  const [project, setProject] = useState([]);

  const { projects } = useContext(ProjectsContext);

  useEffect(() => {
    const fetchData = async () => {
      const projectData = await projects();

      setProject(projectData);
    };
    fetchData();
  }, []);

  return (
    <>
      <ThemeLang />
      <PageTitle title={language === "br" ? "Projetos" : "Projects"} />
      {project === undefined ? (
        ""
      ) : (
        <div
          className={`projects ${
            theme === "light" ? "light-mode" : "dark-mode"
          }`}
        >
          {project.map((project, i) => (
            <div
              className={`projects_main border-${
                theme === "light" ? "light" : "dark"
              }`}
              key={i}
            >
              <div className="projects_main-title" key={i + 1}>
                <h1 key={i + 2}>{project.name}</h1>
              </div>
              <div
                className={`projects_main-image projects_main-image-border--${
                  theme === "light" ? "red" : "blue"
                }`}
                key={i + 3}
              >
                <img src={project.img} alt={project.name} key={i + 4} />
              </div>
              <div className="projects_main-description" key={i + 5}>
                <p key={i + 6}>
                  {language === "br" ? project.descricao : project.description}
                </p>
              </div>
              <div className="projects_main-social" key={i + 7}>
                <h2 key={i + 8}>GitHub</h2>
                <a
                  href={project.github}
                  target={"_blank"}
                  key={i + 9}
                  rel="noreferrer"
                  className={`hover-${
                    theme === "light"
                      ? "light text-border-bottom--dark"
                      : "dark text-border-bottom--light"
                  }`}
                >
                  {project.github}
                </a>
                <h2 key={i + 10}>Site</h2>
                <a
                  href={project.site}
                  target={"_blank"}
                  key={i + 11}
                  rel="noreferrer"
                  className={`hover-${
                    theme === "light"
                      ? "light text-border-bottom--dark"
                      : "dark text-border-bottom--light"
                  }`}
                >
                  {project.site}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}

export default Projects;
