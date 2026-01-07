import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiNextdotjs, SiVite } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB', level: 85 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 80 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
    { name: 'Linux', icon: FaDatabase, color: '#FCC624', level: 85 },
    { name: 'Docker', icon: FaDocker, color: '#2496ED', level: 70 },
    { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 85 },
    { name: 'Vite', icon: SiVite, color: '#646CFF', level: 85 },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 75 },
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

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>

      {/* Background decoration - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-[400px] h-[400px] bg-primary opacity-15 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-secondary opacity-15 rounded-full blur-3xl"
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
            <div className="flex flex-wrap gap-4">
              <motion.div
                className="glass-intense px-6 py-3 rounded-lg cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(59, 130, 246, 0.2)',
                    '0 0 20px rgba(59, 130, 246, 0.4)',
                    '0 0 10px rgba(59, 130, 246, 0.2)',
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
              >
                <div className="text-3xl font-bold text-primary glow-text">17</div>
                <div className="text-gray-400">Jahre alt</div>
              </motion.div>
              <motion.div
                className="glass-intense px-6 py-3 rounded-lg cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(6, 182, 212, 0.2)',
                    '0 0 20px rgba(6, 182, 212, 0.4)',
                    '0 0 10px rgba(6, 182, 212, 0.2)',
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity, delay: 0.5 },
                }}
              >
                <div className="text-3xl font-bold text-secondary glow-text">3+</div>
                <div className="text-gray-400">Aktive Projekte</div>
              </motion.div>
              <motion.div
                className="glass-intense px-6 py-3 rounded-lg cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(139, 92, 246, 0.2)',
                    '0 0 20px rgba(139, 92, 246, 0.4)',
                    '0 0 10px rgba(139, 92, 246, 0.2)',
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity, delay: 1 },
                }}
              >
                <div className="text-3xl font-bold text-accent glow-text">∞</div>
                <div className="text-gray-400">Lines of Code</div>
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
                scale: 1.1,
                y: -15,
                rotateY: 10,
                rotateX: 10,
              }}
              className="glass-intense p-6 rounded-xl cursor-pointer group perspective-card relative overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}15, transparent)`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    filter: `drop-shadow(0 0 15px ${skill.color})`,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon
                    className="text-5xl transition-all duration-300"
                    style={{ color: skill.color }}
                  />
                </motion.div>
                <div className="w-full">
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-gradient transition-all">
                    {skill.name}
                  </h4>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent relative"
                      style={{
                        boxShadow: `0 0 10px ${skill.color}`,
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
