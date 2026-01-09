import { motion } from 'framer-motion';

const GlowingCard = ({ children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated gradient border */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-30 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"
        animate={{
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      {/* Card content */}
      <div className="relative bg-darker rounded-2xl p-6 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlowingCard;
