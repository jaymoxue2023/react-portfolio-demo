import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppFooter from '@components/shared/AppFooter';
import AppHeader from '@components/shared/AppHeader';
import { ThemeProvider } from '@/context/ThemeContext';
import { ProjectsProvider } from './context/ProjectsContext';

// Lazy loading is a technique where the loading of resources is deferred until they are needed, which can help improve the performance of the application.
const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Project = lazy(() => import('./pages/Project.jsx'));

const App = () => {
  return (
    <ThemeProvider>
      <ProjectsProvider>
        <div className="flex flex-col bg-secondary-light dark:bg-primary-dark transition duration-300 px-8">
          <Router>
            <AppHeader />
            {/* The Suspense component allows to render some fallback content
            (like a loading spinner) while components are still loading. */}
            <Suspense fallback={''}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:projectId" element={<Project />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                {/* todo: 404 not found page */}
                {/* <Route element={<NotFound />} /> */}
              </Routes>
            </Suspense>
            <AppFooter />
          </Router>
        </div>
      </ProjectsProvider>
    </ThemeProvider>
  );
};

export default App;
