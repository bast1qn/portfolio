import { useState, useEffect } from 'react';
import { FaDownload, FaTimes, FaWifi } from 'react-icons/fa';

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window.MSStream);
    setIsIOS(isIOSDevice);

    // Listen for beforeinstallprompt event
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Listen for online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial online status
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('PWA installation accepted');
    } else {
      console.log('PWA installation dismissed');
    }

    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  // Don't show if online and no install prompt
  if (!showPrompt && isOnline) {
    return null;
  }

  // Show offline indicator
  if (!isOnline) {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
        <FaWifi className="text-lg" />
        <span className="font-medium">You're offline. Some features may be limited.</span>
      </div>
    );
  }

  // iOS install instructions
  if (isIOS && showPrompt) {
    return (
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 bg-gray-800 border border-primary rounded-xl shadow-2xl p-4 animate-slide-up">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <FaDownload className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Install App</h3>
              <p className="text-xs text-gray-400">Add to home screen</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Dismiss"
          >
            <FaTimes />
          </button>
        </div>
        <div className="text-sm text-gray-300 space-y-2">
          <p>To install this app on your iOS device:</p>
          <ol className="list-decimal list-inside space-y-1 text-xs text-gray-400">
            <li>Tap the Share button <span className="text-primary">↑</span></li>
            <li>Scroll down and tap "Add to Home Screen"</li>
            <li>Tap "Add" to confirm</li>
          </ol>
        </div>
      </div>
    );
  }

  // Android/Desktop install prompt
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 bg-gray-800 border border-primary rounded-xl shadow-2xl p-4 animate-slide-up">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
            <FaDownload className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Install App</h3>
            <p className="text-xs text-gray-400">Available for install</p>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <FaTimes />
        </button>
      </div>
      <p className="text-sm text-gray-300 mb-4">
        Install this app on your device for quick access and offline support.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleInstall}
          className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
        >
          Install
        </button>
        <button
          onClick={handleDismiss}
          className="px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
        >
          Not now
        </button>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
