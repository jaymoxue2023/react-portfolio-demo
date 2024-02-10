import { Link } from 'react-router-dom';
import AppBanner from '@components/shared/AppBanner';
import Button from '@components/reusable/Button';
import ProjectsGrid from '@/components/projects/ProjectsGrid';

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10 ">
      <AppBanner></AppBanner>
      <ProjectsGrid limit={6}></ProjectsGrid>
      <div className="flex justify-center">
        <Link
          to="/projects"
          className="font-general font-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-rose-500 hover:bg-rose-600 focus:ring-1 focus:ring-rose-900 text-white text-lg sm:text-xl duration-300"
          aria-label="More Projects"
        >
          <Button title="More Projects" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
