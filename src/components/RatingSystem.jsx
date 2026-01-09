import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingSystem = ({ projectId, initialRating = 0, onRate }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    if (onRate) {
      onRate(projectId, value);
    }

    // Save to localStorage
    const ratings = JSON.parse(localStorage.getItem('ratings') || '{}');
    ratings[projectId] = value;
    localStorage.setItem('ratings', JSON.stringify(ratings));
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl focus:outline-none"
            aria-label={`Rate ${star} stars`}
          >
            {star <= (hover || rating) ? (
              <FaStar className="text-yellow-400" />
            ) : (
              <FaStar className="text-gray-600" />
            )}
          </motion.button>
        ))}
      </div>
      {rating > 0 && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="ml-2 text-sm text-gray-400"
        >
          {rating}.0/5.0
        </motion.span>
      )}
    </div>
  );
};

export const AverageRating = ({ projectId, allRatings }) => {
  const projectRatings = allRatings
    ?.filter(r => r.projectId === projectId)
    .map(r => r.rating) || [];

  if (projectRatings.length === 0) return null;

  const average = projectRatings.reduce((a, b) => a + b, 0) / projectRatings.length;

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`text-lg ${
              star <= Math.round(average) ? 'text-yellow-400' : 'text-gray-600'
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-400">
        {average.toFixed(1)} ({projectRatings.length} {projectRatings.length === 1 ? 'rating' : 'ratings'})
      </span>
    </div>
  );
};

export default RatingSystem;
