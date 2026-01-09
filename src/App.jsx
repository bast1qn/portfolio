import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { CardSkeleton } from './components/Skeleton';

// Lazy load heavy components
const Testimonials = lazy(() => import('./components/Testimonials'));
const GitHubStats = lazy(() => import('./components/GitHubStats'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const NotFound = lazy(() => import('./components/NotFound'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-gray-900">
    <div className="text-center">
      <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-darker text-white overflow-x-hidden">
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <TechMarquee />
              <About />
              <Projects />
              <Suspense fallback={<div className="py-20"><CardSkeleton /></div>}>
                <Testimonials />
              </Suspense>
              <Suspense fallback={<div className="py-20"><CardSkeleton /></div>}>
                <GitHubStats />
              </Suspense>
              <Suspense fallback={<div className="py-20"><CardSkeleton /></div>}>
                <Services />
              </Suspense>
              <Suspense fallback={<div className="py-20"><CardSkeleton /></div>}>
                <Contact />
              </Suspense>
              <Footer />
            </>
          } />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
