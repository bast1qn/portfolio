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
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Post Header with Gradient */}
              <div className={`h-40 bg-gradient-to-br ${post.gradient} relative flex items-center justify-center overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-7xl"
                >
                  {post.emoji}
                </motion.div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-dark rounded-full font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-primary"
                  >
                    <span className="font-semibold">Lesen</span>
                    <FaArrowRight />
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
