import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-darker text-white overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <TechMarquee />
            <About />
            <Projects />
            <Services />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
