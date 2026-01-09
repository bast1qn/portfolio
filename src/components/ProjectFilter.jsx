import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaCode, FaMobile, FaPalette, FaServer, FaTools } from 'react-icons/fa';

const ProjectFilter = ({ projects, onFilteredProjects }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaFilter },
    { id: 'web', name: 'Web Apps', icon: FaCode },
    { id: 'mobile', name: 'Mobile', icon: FaMobile },
    { id: 'design', name: 'Design', icon: FaPalette },
    { id: 'backend', name: 'Backend', icon: FaServer },
    { id: 'tools', name: 'Tools', icon: FaTools }
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(project => project.category === activeFilter);
  }, [projects, activeFilter]);

  useEffect(() => {
    if (onFilteredProjects) {
      onFilteredProjects(filteredProjects);
    }
  }, [filteredProjects, onFilteredProjects]);

  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeFilter === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/50 scale-105'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon />
              <span>{category.name}</span>
              {activeFilter === category.id && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-1 text-xs bg-white/20 px-2 py-0.5 rounded-full"
                >
                  {filteredProjects.length}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectFilter;
