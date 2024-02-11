import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProjectsContext } from '@/context/ProjectsContext';

const ProjectsGrid = ({ limit }) => {
  const { projects } = useContext(ProjectsContext);

  // If a limit is provided, slice the array of projects
  const projectsToRender = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="flex flex-col gap-10 py-5 sm:py-10">
      <section className="text-center">
        <p className="font-general font-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light">
          Projects portfolio
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsToRender.map((project) => (
          <div key={project.id}>
            <Link to={`/projects/${project.id}`} aria-label={project.title}>
              <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer bg-secondary-light dark:bg-ternary-dark">
                <div>
                  <img
                    src={project.img}
                    className="rounded-t-xl border-none"
                    alt={project.title}
                  />
                </div>
                <div className="text-center px-4 py-6">
                  <p className="font-general font-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                    {project.title}
                  </p>
                  <span className="text-lg text-ternary-dark dark:text-ternary-light">
                    {project.category}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ProjectsGrid;
