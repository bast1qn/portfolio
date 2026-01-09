import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      // Apply saved consent
      applyConsent(JSON.parse(consent));
    }
  }, []);

  const applyConsent = (consent) => {
    // Enable/disable Google Analytics based on consent
    if (consent.analytics) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      // GA is already loaded, just respect consent
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      }
    }
  };

  const handleAcceptAll = () => {
    const consent = { necessary: true, analytics: true };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    applyConsent(consent);
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const consent = { necessary: true, analytics: false };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    applyConsent(consent);
    setIsVisible(false);
  };

  const handleSaveSettings = (analytics) => {
    const consent = { necessary: true, analytics };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    applyConsent(consent);
    setIsVisible(false);
    setShowSettings(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 border-t border-gray-700 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto">
            {!showSettings ? (
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    🍪 Cookie-Einwilligung
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Wir verwenden Cookies, um deine Erfahrung zu verbessern. Erforderliche Cookies
                    sind essenziell für die Funktionalität. Analytics-Cookies helfen uns, die Website zu verbessern.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Einstellungen
                  </button>
                  <button
                    onClick={handleAcceptNecessary}
                    className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
                  >
                    Nur Notwendige
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-semibold"
                  >
                    Alle Akzeptieren
                  </button>
                </div>
              </div>
            ) : (
              <CookieSettings
                onSave={handleSaveSettings}
                onCancel={() => setShowSettings(false)}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CookieSettings = ({ onSave, onCancel }) => {
  const [analytics, setAnalytics] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-white mb-4">Cookie-Einstellungen</h3>

      <div className="space-y-4 mb-6">
        {/* Necessary Cookies */}
        <div className="p-4 bg-gray-800 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex-1">
              <h4 className="text-white font-semibold">Notwendige Cookies</h4>
              <p className="text-gray-400 text-sm">
                Diese Cookies sind für die Funktionalität der Website erforderlich.
              </p>
            </div>
            <span className="ml-4 px-3 py-1 bg-green-600 text-white text-xs rounded-full font-semibold">
              Immer aktiv
            </span>
          </div>
        </div>

        {/* Analytics Cookies */}
        <div className="p-4 bg-gray-800 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="text-white font-semibold">Analytics-Cookies</h4>
              <p className="text-gray-400 text-sm">
                Helfen uns zu verstehen, wie Besucher unsere Website nutzen.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer ml-4">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <button
          onClick={onCancel}
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Abbrechen
        </button>
        <button
          onClick={() => onSave(analytics)}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          Einstellungen Speichern
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
