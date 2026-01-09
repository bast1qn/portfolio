import { motion } from 'framer-motion';

const TechMarquee = () => {
  const techStack = [
    'React', 'TypeScript', 'Node.js', 'Docker', 'AWS',
    'PostgreSQL', 'MongoDB', 'GraphQL', 'Next.js', 'Tailwind',
    'Git', 'Linux', 'Nginx', 'Redis', 'Vite'
  ];

  return (
    <div className="py-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 overflow-hidden border-y border-white/5">
      <div className="flex overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="flex gap-8 px-4"
            animate={{ x: [0, -1400] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {techStack.map((tech) => (
              <span key={`${tech}-${i}`} className="text-xl md:text-2xl font-bold text-gray-300 whitespace-nowrap flex items-center gap-2">
                {tech}
                <span className="text-primary">•</span>
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
