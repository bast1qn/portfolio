import { FaReact, FaNodeJs, FaPython, FaDocker, FaJava, FaGitAlt, FaDatabase, FaAws } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiNextdotjs, SiVite, SiPostgresql, SiMongodb, SiRedux, SiNginx, SiLinux, SiAdobephotoshop } from 'react-icons/si';

const TechMarquee = () => {
  const techStack = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: FaJava, name: 'Java', color: '#007396' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: FaDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: FaGitAlt, name: 'Git', color: '#F05032' },
    { icon: SiLinux, name: 'Linux', color: '#FCC624' },
    { icon: SiNginx, name: 'Nginx', color: '#269539' },
    { icon: FaAws, name: 'AWS', color: '#FF9900' },
    { icon: SiVite, name: 'Vite', color: '#646CFF' },
    { icon: SiRedux, name: 'Redux', color: '#764ABC' },
    { icon: SiAdobephotoshop, name: 'Photoshop', color: '#31A8FF' },
  ];

  return (
    <div className="py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden border-y border-gray-800">
      <div className="flex overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex gap-12 px-6 items-center"
            style={{
              animation: `scroll ${50 + i * 5}s linear infinite`,
            }}
          >
            {techStack.map((tech) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex flex-col items-center gap-2 group"
              >
                <tech.icon
                  className="text-4xl text-gray-400 group-hover:text-primary transition-colors duration-300"
                  style={{ color: tech.color }}
                />
                <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;
