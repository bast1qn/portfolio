import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'ScaleSite',
      description: 'My freelance business for professional web development. From planning to design to hosting on dedicated servers – everything from one source for small businesses.',
      image: '🚀',
      tags: ['React', 'Hosting', 'Nginx', 'Business'],
      category: 'fullstack',
      github: null,
      demo: 'https://scalesite.de',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Lotion',
      description: 'A comprehensive note-taking app inspired by Notion. Features include class management, subjects, mentions, background remover, and a Trello-style carbon board.',
      image: '📝',
      tags: ['React', 'TypeScript', 'Notion-Like'],
      category: 'frontend',
      github: 'https://github.com/bast1qn/lotion',
      demo: null,
      status: 'In Development'
    },
    {
      id: 3,
      title: 'RagePvP',
      description: 'Minecraft Server (Version 1.21.8) in classic SkyPvP/CityBuild style. Includes community management, Discord integration, and custom plugin configuration.',
      image: '⚔️',
      tags: ['Minecraft', 'Java', 'Linux', 'Community'],
      category: 'backend',
      github: null,
      demo: null,
      status: 'Hobby Project'
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my best work and projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-primary transition-all duration-300 group"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-8xl relative overflow-hidden">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
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
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <FaGithub className="text-xl" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
