import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-darker text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
