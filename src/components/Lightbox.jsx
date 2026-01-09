import { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Lightbox = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white hover:text-primary transition-all z-10"
        aria-label="Close lightbox"
      >
        <FaTimes className="text-2xl" />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white hover:text-primary transition-all z-10"
            aria-label="Previous image"
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white hover:text-primary transition-all z-10"
            aria-label="Next image"
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </>
      )}

      {/* Main Image */}
      <div className="max-w-7xl max-h-[90vh] px-4">
        <img
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 px-4 py-2 rounded-full">
          <span className="text-white font-medium">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default Lightbox;
