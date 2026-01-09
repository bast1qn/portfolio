import { useState } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import { FaQrcode, FaDownload, FaTimes, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const QRCodeGenerator = ({ data, type = 'url' }) => {
  const [showModal, setShowModal] = useState(false);

  const qrData = type === 'vcard'
    ? `BEGIN:VCARD
VERSION:3.0
FN:Bastian Giersch
TITLE:IT Specialist & Web Developer
EMAIL:contact@bastian-giersch.de
URL:https://bastian-giersch.de
END:VCARD`
    : data;

  const handleDownload = () => {
    const svg = document.getElementById('qr-code');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const link = document.createElement('a');
      link.download = `qrcode-${type}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <>
      <motion.button
        onClick={() => setShowModal(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
        title="Generate QR Code"
      >
        <FaQrcode className="text-xl" />
      </motion.button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 rounded-2xl p-8 max-w-md w-full border border-gray-700"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">QR Code</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl mb-6 flex justify-center">
              <div id="qr-code">
                <QRCode value={qrData} size={200} />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleDownload}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FaDownload />
                Download PNG
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-400 text-center">
              Scan to {type === 'vcard' ? 'save contact' : 'visit link'}
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export const ShareQRButtons = ({ url, title }) => {
  return (
    <div className="flex gap-2">
      <QRCodeGenerator data={url} type="url" />

      {/* WhatsApp Share */}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
      >
        <FaWhatsapp className="text-xl text-white" />
      </a>

      {/* Email Share */}
      <a
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
        className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
      >
        <FaEnvelope className="text-xl text-white" />
      </a>
    </div>
  );
};

export default QRCodeGenerator;
