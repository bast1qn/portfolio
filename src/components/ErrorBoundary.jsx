import { Component } from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaHome, FaBug } from 'react-icons/fa';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Log error to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-gray-900 flex items-center justify-center p-4"
        >
          <div className="max-w-2xl w-full">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700">
              {/* Error Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="flex justify-center mb-6"
              >
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                  <FaExclamationTriangle className="text-4xl text-red-500" />
                </div>
              </motion.div>

              {/* Error Message */}
              <div className="text-center mb-8">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                  Oops! Something went wrong
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 text-lg mb-2"
                >
                  Don't worry, it's not your fault. An unexpected error occurred.
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-500"
                >
                  The error has been logged and we'll look into it.
                </motion.p>
              </div>

              {/* Error Details (Development) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mb-6 p-4 bg-gray-900 rounded-lg border border-red-500/30"
                >
                  <div className="flex items-center gap-2 text-red-400 mb-2">
                    <FaBug />
                    <span className="font-semibold">Error Details (Development)</span>
                  </div>
                  <pre className="text-xs text-gray-400 overflow-auto max-h-40">
                    {this.state.error.toString()}
                    {this.state.errorInfo.componentStack}
                  </pre>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={this.handleReset}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                >
                  <FaHome />
                  Go to Homepage
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold"
                >
                  <FaBug />
                  Reload Page
                </button>
              </motion.div>

              {/* Contact Support */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 pt-6 border-t border-gray-700 text-center"
              >
                <p className="text-gray-400 text-sm">
                  Still having issues?{' '}
                  <a
                    href="mailto:contact@bastian-giersch.de"
                    className="text-primary hover:text-blue-400 transition-colors"
                  >
                    Contact Support
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
