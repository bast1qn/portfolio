import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const FavoritesSystem = ({ projectId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      const favs = JSON.parse(stored);
      setFavorites(favs);
      setIsFavorite(favs.includes(projectId));
    }
  }, [projectId]);

  const toggleFavorite = () => {
    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter(id => id !== projectId);
    } else {
      newFavorites = [...favorites, projectId];
    }

    setFavorites(newFavorites);
    setIsFavorite(!isFavorite);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <motion.button
      onClick={toggleFavorite}
      className={`p-3 rounded-lg transition-all ${
        isFavorite
          ? 'bg-red-500/20 text-red-500'
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </motion.button>
  );
};

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">❤️ Your Favorites</h1>
        {favorites.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <FaRegHeart className="mx-auto mb-4 text-6xl" />
            <p className="text-xl">No favorites yet</p>
            <p className="mt-2">Start adding projects to your favorites!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((favId) => {
              const project = projects.find(p => p.id === favId);
              return project ? (
                <div key={project.id} className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                </div>
              ) : null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesSystem;
