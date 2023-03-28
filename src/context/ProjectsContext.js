import { createContext } from "react";

const ProjectsContext = createContext();

export const ProjectsProvider = function ({ children }) {
  const projects = async () => {
    const dataFetched = await fetch(`http://localhost:5000/projects`);

    const project = await dataFetched.json();

    return project;
  };

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContext;
