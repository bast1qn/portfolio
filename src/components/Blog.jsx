import { motion } from 'framer-motion';
import { FaClock, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Die Zukunft von Web Development',
      excerpt: 'Ein tiefer Einblick in aufkommende Technologien und Trends, die die Web-Entwicklung in den nächsten Jahren prägen werden.',
      date: '15. Dez 2024',
      readTime: '5 min',
      category: 'Tech Trends',
      gradient: 'from-purple-500 to-pink-500',
      emoji: '🚀',
    },
    {
      id: 2,
      title: 'React Performance Optimierung',
      excerpt: 'Best Practices und fortgeschrittene Techniken zur Optimierung von React-Anwendungen für maximale Performance.',
      date: '10. Dez 2024',
      readTime: '8 min',
      category: 'React',
      gradient: 'from-blue-500 to-cyan-500',
      emoji: '⚡',
    },
    {
      id: 3,
      title: 'Tailwind CSS vs. Styled Components',
      excerpt: 'Ein detaillierter Vergleich zweier populärer Styling-Ansätze mit Vor- und Nachteilen für verschiedene Use-Cases.',
      date: '5. Dez 2024',
      readTime: '6 min',
      category: 'CSS',
      gradient: 'from-green-500 to-teal-500',
      emoji: '🎨',
    },
    {
      id: 4,
      title: 'TypeScript Tips & Tricks',
      excerpt: 'Weniger bekannte TypeScript-Features und Patterns, die deinen Code robuster und wartbarer machen.',
      date: '1. Dez 2024',
      readTime: '7 min',
      category: 'TypeScript',
      gradient: 'from-indigo-500 to-blue-500',
      emoji: '📘',
    },
    {
      id: 5,
      title: 'Building Scalable APIs',
      excerpt: 'Architektur-Patterns und Best Practices für die Entwicklung skalierbarer und wartbarer REST APIs.',
      date: '25. Nov 2024',
      readTime: '10 min',
      category: 'Backend',
      gradient: 'from-orange-500 to-red-500',
      emoji: '🔧',
    },
    {
      id: 6,
      title: 'Modern State Management',
      excerpt: 'Ein Überblick über moderne State-Management-Lösungen von Redux bis Zustand und wann welche eingesetzt werden sollte.',
      date: '20. Nov 2024',
      readTime: '9 min',
      category: 'React',
      gradient: 'from-yellow-500 to-orange-500',
      emoji: '🔄',
    },
  ];

  return (
    <section id="blog" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>

      {/* Background decoration - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-secondary opacity-15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: 360,
            x: [0, -80, 0],
          }}
          transition={{
            scale: { duration: 11, repeat: Infinity },
            rotate: { duration: 28, repeat: Infinity, ease: 'linear' },
            x: { duration: 14, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-accent opacity-15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: -360,
            y: [0, 80, 0],
          }}
          transition={{
            scale: { duration: 13, repeat: Infinity },
            rotate: { duration: 32, repeat: Infinity, ease: 'linear' },
            y: { duration: 16, repeat: Infinity },
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mein <span className="text-gradient">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Gedanken, Tutorials und Insights zu Web Development
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                y: -20,
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                boxShadow: '0 30px 70px rgba(59, 130, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.4)',
              }}
              className="glass-intense rounded-xl overflow-hidden group cursor-pointer perspective-card"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Post Header with Gradient */}
              <div className={`h-40 bg-gradient-to-br ${post.gradient} relative flex items-center justify-center overflow-hidden`}>
                <motion.div
                  whileHover={{
                    scale: 1.4,
                    rotate: 360,
                  }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className="text-7xl relative z-10"
                >
                  {post.emoji}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                />
                {/* Rotating gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white opacity-0 group-hover:opacity-20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-3 text-sm">
                  <motion.span
                    className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold"
                    animate={{
                      boxShadow: [
                        '0 0 5px rgba(59, 130, 246, 0.3)',
                        '0 0 15px rgba(59, 130, 246, 0.6)',
                        '0 0 5px rgba(59, 130, 246, 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                    }}
                  >
                    {post.category}
                  </motion.span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      <FaClock />
                    </motion.div>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <motion.h3
                  className="text-xl font-bold mb-3 text-gradient group-hover:scale-105 transition-transform"
                  whileHover={{
                    textShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                  }}
                >
                  {post.title}
                </motion.h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <motion.div
                    whileHover={{
                      x: 8,
                      scale: 1.1,
                    }}
                    className="flex items-center gap-2 text-primary cursor-pointer"
                  >
                    <span className="font-semibold">Lesen</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <FaArrowRight />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all group"
          >
            <span className="flex items-center gap-3">
              Alle Artikel ansehen
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
