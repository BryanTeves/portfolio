import { createContext } from "react";

const ProjectsContext = createContext();

export const ProjectsProvider = function ({ children }) {
  const projects = async (id) => {
    const dataFetched = await fetch(`http://localhost:5000/projects/${id}`);

    const project = await dataFetched.json();

    console.log(project);

    return project;
  };

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContext;
