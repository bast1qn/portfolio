import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center px-4">
        {/* 404 Number */}
        <div className="mb-8 relative">
          <h1 className="text-[200px] md:text-[300px] font-bold text-gray-800 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl md:text-8xl">😕</div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to a different URL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            <FaHome />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 rounded-lg font-semibold text-gray-300 hover:border-primary hover:text-primary transition-all"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8 text-6xl opacity-20">
          <span>🚀</span>
          <span>💻</span>
          <span>⚡</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
