import { useContext } from 'react';
import { ProjectsContext } from '@/context/ProjectsContext';
import { useParams } from 'react-router-dom';
import { FiClock, FiTag } from 'react-icons/fi';

const Project = () => {
  let { projectId } = useParams();
  const { projects } = useContext(ProjectsContext);
  const matchedProject = projects.find(
    (project) => project.id === parseInt(projectId),
  );

  return (
    <div className="container mx-auto mt-5 sm:mt-10">
      {/* Header */}
      <div>
        <p className="font-general font-medium text-left text-3xl sm:text-4xl font-general font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {matchedProject.title}
        </p>
        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
            <span className="font-general ml-2 leading-none text-primary-dark dark:text-primary-light">
              {matchedProject.completionDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
            <span className="font-general ml-2 leading-none text-primary-dark dark:text-primary-light">
              {matchedProject.category}
            </span>
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {matchedProject.screenshots.map((screenshot, index) => {
          return (
            <div className="mb-10 sm:mb-0" key={index}>
              <img
                src={screenshot}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={matchedProject.title}
              />
            </div>
          );
        })}
      </div>

      {/* Details */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Role */}
          <div className="mb-7">
            <p className="font-general text-2xl font-general font-semibold text-secondary-dark dark:text-primary-light mb-2">
              Role
            </p>
            <ul className="leading-loose">
              <li className="font-general text-ternary-dark dark:text-ternary-light">
                {matchedProject.role}
              </li>
            </ul>
          </div>

          {/* Tech Stacks */}
          <div className="mb-7">
            <p className="font-general text-2xl font-general font-semibold text-secondary-dark dark:text-primary-light mb-2">
              Tech Stacks
            </p>
            <p className="font-general text-primary-dark dark:text-ternary-light">
              {matchedProject.techStacks.map((techStack, index) => (
                <li
                  key={index}
                  className="font-general text-ternary-dark dark:text-ternary-light"
                >
                  {techStack}
                </li>
              ))}
            </p>
          </div>
        </div>

        {/* Deep Dive */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="font-general text-primary-dark dark:text-primary-light text-2xl font-general font-bold mb-7">
            Deep Dive
          </p>
          <p className="font-general mb-5 text-lg text-ternary-dark dark:text-ternary-light">
            {matchedProject.background}
          </p>
          <p className="font-general mb-5 text-lg text-ternary-dark dark:text-ternary-light">
            {matchedProject.technicalInsights}
          </p>
          <p className="font-general mb-5 text-lg text-ternary-dark dark:text-ternary-light">
            {matchedProject.achievements}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
