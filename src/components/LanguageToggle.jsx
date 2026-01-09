import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-primary transition-all duration-300 font-medium"
      aria-label="Toggle language"
      title="Switch Language / Sprache wechseln"
    >
      <span className="flex items-center gap-2">
        <FaGlobe className="text-lg" />
        {language.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageToggle;
