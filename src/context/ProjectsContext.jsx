import { useState, createContext } from 'react';
import { projectsData } from '@/data/projectsData';

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsData);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
