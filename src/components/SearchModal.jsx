import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHotkeys } from 'react-hotkeys-hook';
import { FaSearch, FaTimes, FaFileAlt } from 'react-icons/fa';
import Fuse from 'fuse.js';
import { useNavigate } from 'react-router-dom';

const SearchModal = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  useHotkeys('cmd+k', (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  });

  useHotkeys('escape', () => setIsOpen(false));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const fuse = useMemo(() => {
    return new Fuse(projects || [], {
      keys: ['title', 'description', 'tags', 'category'],
      threshold: 0.3,
      includeScore: true
    });
  }, [projects]);

  useEffect(() => {
    if (query.length > 0) {
      const searchResults = fuse.search(query);
      setResults(searchResults.slice(0, 6));
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query]);

  useHotkeys('arrowdown', (e) => {
    e.preventDefault();
    setSelectedIndex((prev) => (prev + 1) % results.length);
  });

  useHotkeys('arrowup', (e) => {
    e.preventDefault();
    setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
  });

  useHotkeys('enter', (e) => {
    e.preventDefault();
    if (results.length > 0) {
      handleResultClick(results[selectedIndex].item);
    }
  });

  const handleResultClick = useCallback((result) => {
    setIsOpen(false);
    navigate(`/projects/${result.id}`);
  }, [navigate]);

  return (
    <>
      {/* Search Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaSearch />
        <span className="hidden sm:inline">Search</span>
        <kbd className="ml-2 px-2 py-0.5 text-xs bg-gray-700 rounded">⌘K</kbd>
      </motion.button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
              >
                {/* Search Input */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-700">
                  <FaSearch className="text-gray-400 text-xl" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search projects..."
                    className="flex-1 bg-transparent text-white text-lg outline-none placeholder-gray-500"
                    autoFocus
                  />
                  <kbd className="px-2 py-1 text-xs bg-gray-700 rounded text-gray-400">ESC</kbd>
                </div>

                {/* Results */}
                <div className="max-h-[400px] overflow-y-auto">
                  {query.length === 0 ? (
                    <div className="px-6 py-8 text-center text-gray-500">
                      <FaFileAlt className="mx-auto mb-3 text-4xl" />
                      <p>Type to search projects...</p>
                      <p className="text-sm mt-2">Use ↑↓ arrows to navigate, Enter to select</p>
                    </div>
                  ) : results.length === 0 ? (
                    <div className="px-6 py-8 text-center text-gray-500">
                      <p>No results found for "{query}"</p>
                    </div>
                  ) : (
                    <div className="py-2">
                      {results.map((result, index) => {
                        const item = result.item;
                        return (
                          <motion.button
                            key={item.id}
                            onClick={() => handleResultClick(item)}
                            className={`w-full px-6 py-3 flex items-center gap-4 transition-colors ${
                              index === selectedIndex ? 'bg-gray-700' : 'hover:bg-gray-700/50'
                            }`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <div className="flex-1 text-left">
                              <h4 className="text-white font-semibold">{item.title}</h4>
                              <p className="text-sm text-gray-400 line-clamp-1">{item.description}</p>
                            </div>
                            {result.score && (
                              <span className="text-xs text-gray-500">
                                {(1 - result.score).toFixed(0)}%
                              </span>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    );
  };

export default SearchModal;
