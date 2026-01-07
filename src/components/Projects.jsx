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

        {/* Professional Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold font-poppins transition-all ${
                filter === category.id
                  ? 'btn-professional'
                  : 'glass-premium shadow-elegant hover:bg-white hover:bg-opacity-10'
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-professional glass-premium rounded-xl overflow-hidden shadow-elegant"
            >
              {/* Professional Project Header */}
              <div className={`h-32 bg-gradient-to-r ${project.color} opacity-80 flex items-center justify-center relative`}>
                <div className="text-white text-5xl">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold font-poppins text-white">
                    {project.title}
                  </h3>
                  <span className="badge-professional text-xs font-inter">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed font-inter">
                  {project.description}
                </p>

                {/* Professional Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white bg-opacity-5 rounded-md text-sm text-gray-300 border border-white border-opacity-10 font-inter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Professional Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass-premium rounded-lg text-gray-300 hover:text-white transition-all shadow-elegant font-inter text-sm"
                    >
                      <FaGithub className="text-lg" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass-premium rounded-lg text-gray-300 hover:text-white transition-all shadow-elegant font-inter text-sm"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span>Live Demo</span>
                    </a>
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
