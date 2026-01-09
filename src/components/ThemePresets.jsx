import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaSun, FaMoon, FaLeaf, FaWater, FaFire } from 'react-icons/fa';

const themes = {
  default: {
    name: 'Ocean Blue',
    icon: FaWater,
    primary: '#3b82f6',
    secondary: '#2563eb',
    accent: '#60a5fa',
    gradient: 'from-blue-500 to-cyan-500'
  },
  sunset: {
    name: 'Sunset Orange',
    icon: FaSun,
    primary: '#f97316',
    secondary: '#ea580c',
    accent: '#fb923c',
    gradient: 'from-orange-500 to-red-500'
  },
  forest: {
    name: 'Forest Green',
    icon: FaLeaf,
    primary: '#10b981',
    secondary: '#059669',
    accent: '#34d399',
    gradient: 'from-green-500 to-emerald-500'
  },
  midnight: {
    name: 'Midnight Purple',
    icon: FaMoon,
    primary: '#8b5cf6',
    secondary: '#7c3aed',
    accent: '#a78bfa',
    gradient: 'from-purple-500 to-pink-500'
  },
  fire: {
    name: 'Fire Red',
    icon: FaFire,
    primary: '#ef4444',
    secondary: '#dc2626',
    accent: '#f87171',
    gradient: 'from-red-500 to-orange-500'
  }
};

const ThemePresets = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    const saved = localStorage.getItem('themePreset') || 'default';
    setCurrentTheme(saved);
    applyTheme(saved);
  }, []);

  const applyTheme = (themeName) => {
    const theme = themes[themeName];

    // Update CSS custom properties
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    document.documentElement.style.setProperty('--color-accent', theme.accent);

    // Update Tailwind config via CSS
    const style = document.createElement('style');
    style.textContent = `
      .bg-primary { background-color: ${theme.primary} !important; }
      .text-primary { color: ${theme.primary} !important; }
      .border-primary { border-color: ${theme.primary} !important; }
      .hover\\:bg-primary:hover { background-color: ${theme.primary} !important; }
    `;
    document.head.appendChild(style);

    localStorage.setItem('themePreset', themeName);
  };

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
    applyTheme(themeName);
    setIsOpen(false);

    // Announce to screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', 'polite');
    announcer.className = 'sr-only';
    announcer.textContent = `Theme changed to ${themes[themeName].name}`;
    document.body.appendChild(announcer);
    setTimeout(() => document.body.removeChild(announcer), 1000);
  };

  const currentThemeData = themes[currentTheme];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        title="Change theme"
      >
        <FaPalette className={isOpen ? 'text-primary' : ''} />
        <span className="hidden sm:inline">Theme</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 z-50 overflow-hidden"
            >
              <div className="p-2">
                {Object.entries(themes).map(([key, theme]) => {
                  const Icon = theme.icon;
                  return (
                    <motion.button
                      key={key}
                      onClick={() => handleThemeChange(key)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        currentTheme === key
                          ? 'bg-gray-700 text-white'
                          : 'text-gray-300 hover:bg-gray-700/50'
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <Icon
                        className={`text-lg ${
                          currentTheme === key ? 'text-primary' : ''
                        }`}
                        style={{
                          color: currentTheme === key ? theme.primary : ''
                        }}
                      />
                      <span className="flex-1 text-left">{theme.name}</span>
                      {currentTheme === key && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: theme.primary }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemePresets;
