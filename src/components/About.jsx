import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiNextdotjs, SiVite } from 'react-icons/si';
import RevealSection from './RevealSection';

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
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
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
          <RevealSection delay={0} className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Hey, ich bin Bastian! 👋</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              17 Jahre alt, aus Lutherstadt Wittenberg – aktuell in der Ausbildung zum
              Fachinformatiker für Systemintegration und gleichzeitig als Freelance
              Web Developer unterwegs. Bei mir trifft Server-Administration auf moderne
              Web-Entwicklung.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ich hoste meine Projekte auf eigenen Dedicated Servern, entwickle mit React
              & TypeScript und nutze AI-Assisted Coding, um schneller ans Ziel zu kommen
              – ohne dabei die Code-Qualität aus den Augen zu verlieren.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="glass px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold text-primary">17</div>
                <div className="text-gray-300">Jahre alt</div>
              </div>
              <div className="glass px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold text-secondary">3+</div>
                <div className="text-gray-300">Aktive Projekte</div>
              </div>
              <div className="glass px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold text-accent">∞</div>
                <div className="text-gray-300">Lines of Code</div>
              </div>
            </div>
          </RevealSection>

          {/* Profile Image Placeholder */}
          <RevealSection delay={0.2} className="flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 glass rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-9xl">💻</div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl -z-10 animate-glow"></div>
            </div>
          </RevealSection>
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
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass p-6 rounded-xl card-hover cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <skill.icon
                  className="text-5xl transition-colors duration-300"
                  style={{ color: skill.color }}
                />
                <div className="w-full">
                  <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                  <p className="text-sm text-gray-300 mt-1">{skill.level}%</p>
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
