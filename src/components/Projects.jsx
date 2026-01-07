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
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Project Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-8xl relative overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.image}
                </motion.div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs rounded-full">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white bg-opacity-5 rounded-full text-sm text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <FaGithub className="text-xl" />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                      <span>Live</span>
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
