import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiNextdotjs, SiVite } from 'react-icons/si';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [age, setAge] = useState(0);
  const [projects, setProjects] = useState(0);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    if (isStatsInView) {
      // Animate age counter
      let ageCounter = 0;
      const ageInterval = setInterval(() => {
        ageCounter++;
        setAge(ageCounter);
        if (ageCounter >= 17) clearInterval(ageInterval);
      }, 50);

      // Animate projects counter
      let projectsCounter = 0;
      const projectsInterval = setInterval(() => {
        projectsCounter++;
        setProjects(projectsCounter);
        if (projectsCounter >= 3) clearInterval(projectsInterval);
      }, 200);

      return () => {
        clearInterval(ageInterval);
        clearInterval(projectsInterval);
      };
    }
  }, [isStatsInView]);

  const skills = [
    {
      name: 'React',
      icon: FaReact,
      color: '#61DAFB',
      level: 85,
      description: 'Moderne Frontend-Entwicklung mit Hooks, Context API und Performance-Optimierung',
      experience: '2+ Jahre',
      projects: 'ScaleSite, Lotion, Portfolio'
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '#3178C6',
      level: 80,
      description: 'Type-Safe JavaScript für skalierbare und wartbare Anwendungen',
      experience: '1.5 Jahre',
      projects: 'Lotion, diverse Freelance-Projekte'
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#06B6D4',
      level: 90,
      description: 'Utility-First CSS Framework für schnelles und responsives Design',
      experience: '2+ Jahre',
      projects: 'Alle aktuellen Projekte'
    },
    {
      name: 'Linux',
      icon: FaDatabase,
      color: '#FCC624',
      level: 85,
      description: 'Server-Administration, Bash-Scripting und System-Optimierung',
      experience: '3+ Jahre',
      projects: 'ScaleSite Hosting, RagePvP Server'
    },
    {
      name: 'Docker',
      icon: FaDocker,
      color: '#2496ED',
      level: 70,
      description: 'Container-Virtualisierung für konsistente Development- und Production-Umgebungen',
      experience: '1 Jahr',
      projects: 'Deployment-Pipelines, Dev-Environments'
    },
    {
      name: 'Git',
      icon: FaGitAlt,
      color: '#F05032',
      level: 85,
      description: 'Versionskontrolle mit Git & GitHub für professionelles Code-Management',
      experience: '2+ Jahre',
      projects: 'Alle Projekte'
    },
    {
      name: 'Vite',
      icon: SiVite,
      color: '#646CFF',
      level: 85,
      description: 'Next-Gen Frontend Tooling für blitzschnelle Development-Experience',
      experience: '1.5 Jahre',
      projects: 'Portfolio, ScaleSite'
    },
    {
      name: 'Node.js',
      icon: FaNodeJs,
      color: '#339933',
      level: 75,
      description: 'Backend-Entwicklung mit Express, REST APIs und Server-Side Logic',
      experience: '1.5 Jahre',
      projects: 'Backend-Services, APIs'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // Professional subtle particles - Minimal
  const sparkles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 10,
  }));

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>

      {/* Background decoration - Enhanced with morphing blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-[400px] h-[400px] bg-primary opacity-15 blur-3xl morphing-blob"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-secondary opacity-15 blur-3xl morphing-blob"
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Additional morphing blobs */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-accent opacity-10 blur-3xl morphing-blob"
          animate={{
            scale: [1, 1.6, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Professional Subtle Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute w-1.5 h-1.5"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.3, 0],
              scale: [0, 0.8, 0],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: 'easeInOut',
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-primary to-secondary rounded-full blur-sm" style={{
              boxShadow: '0 0 6px rgba(59, 130, 246, 0.4)',
            }} />
          </motion.div>
        ))}
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
            Über <span className="text-gradient">Mich</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-primary">Hey, ich bin Bastian! 👋</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              17 Jahre alt, aus Lutherstadt Wittenberg – aktuell in der Ausbildung zum
              Fachinformatiker für Systemintegration und gleichzeitig als Freelance
              Web Developer unterwegs. Bei mir trifft Server-Administration auf moderne
              Web-Entwicklung.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Ich hoste meine Projekte auf eigenen Dedicated Servern, entwickle mit React
              & TypeScript und nutze AI-Assisted Coding, um schneller ans Ziel zu kommen
              – ohne dabei die Code-Qualität aus den Augen zu verlieren.
            </p>
            <div ref={statsRef} className="flex flex-wrap gap-4">
              <motion.div
                className="glass-premium px-6 py-3 rounded-lg card-professional shadow-elegant"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-3xl font-bold text-primary font-poppins"
                  animate={{
                    scale: isStatsInView ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {age}
                </motion.div>
                <div className="text-gray-400 text-sm font-inter">Jahre alt</div>
              </motion.div>
              <motion.div
                className="glass-premium px-6 py-3 rounded-lg card-professional shadow-elegant"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-3xl font-bold text-secondary font-poppins"
                  animate={{
                    scale: isStatsInView ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {projects}+
                </motion.div>
                <div className="text-gray-400 text-sm font-inter">Aktive Projekte</div>
              </motion.div>
              <motion.div
                className="glass-premium px-6 py-3 rounded-lg card-professional shadow-elegant"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-3xl font-bold text-accent font-poppins"
                  animate={{
                    scale: isStatsInView ? [1, 1.2, 1] : 1,
                    rotate: isStatsInView ? [0, 360, 0] : 0,
                  }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  ∞
                </motion.div>
                <div className="text-gray-400 text-sm font-inter">Lines of Code</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 glass rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-9xl">💻</div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl -z-10 animate-glow"></div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Meine <span className="text-gradient">Skills</span>
          </h3>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
              className="glass-premium p-6 rounded-xl cursor-pointer group card-professional shadow-elegant relative overflow-hidden"
            >
              {/* Elegant gradient background on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 elegant-gradient"
                transition={{
                  duration: 0.4,
                }}
              />

              <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                  }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                >
                  <skill.icon
                    className="text-5xl transition-all duration-300 group-hover:opacity-90"
                    style={{ color: skill.color }}
                  />
                </motion.div>
                <div className="w-full">
                  <h4 className="font-semibold text-lg mb-2 font-poppins group-hover:text-gradient-professional transition-all">
                    {skill.name}
                  </h4>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden relative shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.08, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent relative"
                      style={{
                        boxShadow: `0 0 8px ${skill.color}40`,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white"
                        animate={{
                          x: ['-100%', '100%'],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    </motion.div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1 font-semibold">{skill.level}%</p>
                </div>

                {/* Expandable Details */}
                {selectedSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-white border-opacity-10"
                  >
                    <p className="text-xs text-gray-400 mb-2 leading-relaxed">
                      {skill.description}
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-500">
                        <span className="text-primary font-semibold">Erfahrung:</span> {skill.experience}
                      </p>
                      <p className="text-xs text-gray-500">
                        <span className="text-secondary font-semibold">Projekte:</span> {skill.projects}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
