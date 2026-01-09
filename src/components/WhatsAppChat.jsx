import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification after 10 seconds
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('whatsapp-notification-seen')) {
        setShowNotification(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseNotification = () => {
    setShowNotification(false);
    sessionStorage.setItem('whatsapp-notification-seen', 'true');
  };

  const handleChatOpen = () => {
    setIsOpen(true);
    handleCloseNotification();
  };

  const phoneNumber = '491234567890'; // Replace with actual number
  const message = encodeURIComponent('Hi Bastian! I found your portfolio and would like to connect.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      {/* Notification Tooltip */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 max-w-xs"
          >
            <div className="relative bg-gray-800 text-white p-4 rounded-2xl shadow-2xl border border-gray-700">
              {/* Close button */}
              <button
                onClick={handleCloseNotification}
                className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={12} />
              </button>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-xl text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold mb-1">Need help?</p>
                  <p className="text-xs text-gray-300">
                    Chat with me on WhatsApp for quick support!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]"
            >
              <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
                {/* Header */}
                <div className="bg-green-600 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <FaWhatsapp className="text-xl text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">Bastian Giersch</h3>
                      <p className="text-green-100 text-xs">Typically replies instantly</p>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-green-200 transition-colors"
                    >
                      <FaTimes size={20} />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4">
                  <div className="bg-gray-700 rounded-lg p-3 mb-4">
                    <p className="text-white text-sm">
                      Hi there! 👋
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      Welcome to my portfolio! Feel free to reach out if you have any questions or want to work together.
                    </p>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    Start Chat
                  </a>

                  <p className="text-center text-gray-500 text-xs mt-3">
                    Powered by WhatsApp
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleChatOpen}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl text-white" />
      </motion.button>
    </>
  );
};

export default WhatsAppChat;
