import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: 'home' },
    { name: t('nav.about'), href: 'about' },
    { name: t('nav.projects'), href: 'projects' },
    { name: t('nav.services'), href: 'services' },
    { name: t('nav.contact'), href: 'contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-darker/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {isHomePage ? (
            <Link to="home" smooth={true} duration={500} className="flex items-center space-x-2 cursor-pointer">
              <FaCode className="text-primary text-2xl" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bastian Giersch
              </span>
            </Link>
          ) : (
            <RouterLink to="/" className="flex items-center space-x-2 cursor-pointer">
              <FaCode className="text-primary text-2xl" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bastian Giersch
              </span>
            </RouterLink>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage && navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-primary text-2xl transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-darker/95 backdrop-blur-md border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {isHomePage && navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-primary hover:bg-gray-800 rounded-md transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
