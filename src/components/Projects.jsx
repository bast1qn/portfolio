import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'ScaleSite',
      description: 'Mein Freelance-Business für professionelle Webentwicklung. Von der Planung über das Design bis zum Hosting auf eigenem Dedicated Server – alles aus einer Hand für Kleinunternehmen.',
      image: '🚀',
      tags: ['React', 'Hosting', 'Nginx', 'Business'],
      category: 'fullstack',
      github: null,
      demo: 'https://scalesite.de',
      color: 'from-blue-500 to-cyan-500',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Lotion',
      description: 'Eine umfangreiche Notizen-App inspiriert von Notion. Mit Features wie Klassen-Management, Fächern, Mentions, Background-Remover und einem Carbon-Board im Trello-Style.',
      image: '📝',
      tags: ['React', 'TypeScript', 'Notion-Like'],
      category: 'frontend',
      github: 'https://github.com/bast1qn/lotion',
      demo: null,
      color: 'from-purple-500 to-pink-500',
      status: 'In Development'
    },
    {
      id: 3,
      title: 'RagePvP',
      description: 'Minecraft Server (Version 1.21.8) im klassischen SkyPvP/CityBuild Style. Inklusive Community-Management, Discord-Integration und Custom-Plugin-Konfiguration.',
      image: '⚔️',
      tags: ['Minecraft', 'Java', 'Linux', 'Community'],
      category: 'backend',
      github: null,
      demo: null,
      color: 'from-green-500 to-emerald-500',
      status: 'Hobby-Projekt'
    },
  ];

  const categories = [
    { id: 'all', label: 'Alle' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>

      {/* Background decoration - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 right-20 w-[500px] h-[500px] bg-accent opacity-15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: 360,
          }}
          transition={{
            scale: { duration: 8, repeat: Infinity },
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-primary opacity-15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: -360,
          }}
          transition={{
            scale: { duration: 10, repeat: Infinity },
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-secondary opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [-50, 50, -50],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
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
            Meine <span className="text-gradient">Projekte</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Eine Auswahl meiner besten Arbeiten und Projekte
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-dark'
                  : 'glass hover:bg-white hover:bg-opacity-10'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -15,
                rotateX: 5,
                rotateY: 5,
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(59, 130, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.3)',
              }}
              className="glass-intense rounded-xl overflow-hidden group cursor-pointer perspective-card"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Project Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-8xl relative overflow-hidden`}>
                <motion.div
                  whileHover={{
                    scale: 1.3,
                    rotate: 15,
                  }}
                  transition={{ duration: 0.4, type: 'spring' }}
                  className="relative z-10"
                >
                  {project.image}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white opacity-0 group-hover:opacity-20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-3">
                  <motion.h3
                    className="text-2xl font-bold text-gradient group-hover:scale-105 transition-transform"
                    whileHover={{
                      textShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.span
                    className="px-3 py-1 bg-gradient-to-r from-primary to-secondary bg-opacity-20 text-white text-xs rounded-full font-semibold"
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
                  >
                    {project.status}
                  </motion.span>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-3 group-hover:text-white transition-colors">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-white bg-opacity-5 rounded-full text-sm text-primary hover:bg-opacity-10 cursor-pointer border border-primary border-opacity-30"
                      whileHover={{
                        scale: 1.1,
                        borderColor: 'rgba(59, 130, 246, 1)',
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.15,
                        x: 5,
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors relative group/link"
                    >
                      <motion.div
                        whileHover={{
                          rotate: 360,
                          filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))',
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaGithub className="text-xl" />
                      </motion.div>
                      <span className="font-semibold">Code</span>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.15,
                        x: 5,
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors relative group/link"
                    >
                      <motion.div
                        whileHover={{
                          rotate: 360,
                          filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))',
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaExternalLinkAlt className="text-xl" />
                      </motion.div>
                      <span className="font-semibold">Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
