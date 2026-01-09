import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Accessibility from './components/Accessibility';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import BackToTop from './components/BackToTop';
import CookieConsent from './components/CookieConsent';
import StructuredData from './components/StructuredData';
import WhatsAppChat from './components/WhatsAppChat';
import ParticleBackground from './components/ParticleBackground';
import Newsletter from './components/Newsletter';
import { ReadingProgress } from './components/ReadingTime';
import ThemePresets from './components/ThemePresets';
import ProtectedRoute from './components/ProtectedRoute';
import { CardSkeleton } from './components/Skeleton';

// Lazy load heavy components
const Testimonials = lazy(() => import('./components/Testimonials'));
const GitHubStats = lazy(() => import('./components/GitHubStats'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const FavoritesPage = lazy(() => import('./components/FavoritesSystem').then(m => ({ default: m.FavoritesPage })));
const AnalyticsDashboard = lazy(() => import('./components/AnalyticsDashboard'));
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
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
        <Accessibility />
        <StructuredData />
        <ReadingProgress />
        <ParticleBackground />

        <Navbar
          additionalActions={<ThemePresets />}
        />

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <TechMarquee />
                <About />
                <Projects />
                <Newsletter />
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
            <Route path="/favorites" element={
              <Suspense fallback={<PageLoader />}>
                <FavoritesPage />
              </Suspense>
            } />
            <Route path="/analytics" element={
              <ProtectedRoute>
                <AnalyticsDashboard />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <BackToTop />
        <PWAInstallPrompt />
        <WhatsAppChat />
        <CookieConsent />
      </div>
    </ErrorBoundary>
  );
}

export default App;
