import { FaReact, FaNodeJs, FaPython, FaDocker, FaJava, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiNextdotjs, SiVite, SiPostgresql, SiMongodb, SiRedux, SiNginx, SiLinux, SiAdobephotoshop } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React', icon: FaReact, level: 90 },
    { name: 'TypeScript', icon: SiTypescript, level: 85 },
    { name: 'Next.js', icon: SiNextdotjs, level: 80 },
    { name: 'Node.js', icon: FaNodeJs, level: 82 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92 },
    { name: 'Python', icon: FaPython, level: 75 },
    { name: 'Java', icon: FaJava, level: 70 },
    { name: 'Docker', icon: FaDocker, level: 75 },
    { name: 'Git', icon: FaGitAlt, level: 90 },
    { name: 'Linux', icon: SiLinux, level: 85 },
    { name: 'MySQL', icon: SiMysql, level: 80 },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 78 },
    { name: 'MongoDB', icon: SiMongodb, level: 72 },
    { name: 'Nginx', icon: SiNginx, level: 80 },
    { name: 'Vite', icon: SiVite, level: 88 },
    { name: 'Redux', icon: SiRedux, level: 75 },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Hey, I'm Bastian! 👋</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              17 years old from Lutherstadt Wittenberg – currently training as an IT Specialist for System Integration
              and working as a Freelance Web Developer. I bridge the gap between server administration and modern web development.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I host my projects on dedicated servers, develop with React & TypeScript, and leverage AI-assisted coding
              to work efficiently without compromising code quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-800 px-6 py-3 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-primary">17</div>
                <div className="text-gray-400 text-sm">Years Old</div>
              </div>
              <div className="bg-gray-800 px-6 py-3 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-secondary">3+</div>
                <div className="text-gray-400 text-sm">Active Projects</div>
              </div>
              <div className="bg-gray-800 px-6 py-3 rounded-lg border border-gray-700">
                <div className="text-3xl font-bold text-accent">∞</div>
                <div className="text-gray-400 text-sm">Lines of Code</div>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-700">
                <div className="text-9xl">💻</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            My <span className="text-primary">Skills</span>
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <skill.icon className="text-5xl text-gray-400 group-hover:text-primary transition-colors duration-300" />
                <div className="w-full">
                  <h4 className="font-semibold text-lg mb-2 text-white">{skill.name}</h4>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{skill.level}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
