import { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(() => {
    // Check i18next first
    const currentLang = i18n.language;
    if (currentLang) {
      return currentLang;
    }
    // Check localStorage
    const savedLanguage = localStorage.getItem('language') || localStorage.getItem('i18nextLng');
    if (savedLanguage) {
      return savedLanguage;
    }
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'de' ? 'de' : 'en';
  });

  useEffect(() => {
    // Sync with i18next
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
    // Save to localStorage
    localStorage.setItem('language', language);
    localStorage.setItem('i18nextLng', language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    const newLang = language === 'de' ? 'en' : 'de';
    setLanguage(newLang);
    // Also change i18next language
    i18n.changeLanguage(newLang);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    // Also change i18next language
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
