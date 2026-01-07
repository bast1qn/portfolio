import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/bastiangiersch', color: 'hover:text-white' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/bastian-giersch', color: 'hover:text-blue-500' },
    { icon: FaEnvelope, href: '#contact', color: 'hover:text-primary' },
  ];

  // Particle configuration
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>

      {/* Intense Animated Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] -top-48 -left-48 bg-primary opacity-20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { type: 'spring', stiffness: 50 },
            y: { type: 'spring', stiffness: 50 },
            scale: { duration: 4, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] -bottom-48 -right-48 bg-secondary opacity-20 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x,
            y: -mousePosition.y,
            scale: [1, 1.3, 1],
          }}
          transition={{
            x: { type: 'spring', stiffness: 50 },
            y: { type: 'spring', stiffness: 50 },
            scale: { duration: 5, repeat: Infinity, delay: 1 },
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent opacity-20 rounded-full blur-3xl"
          animate={{
            rotate: 360,
            scale: [1, 1.4, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 6, repeat: Infinity, delay: 2 },
          }}
        />

        {/* Additional neon glow orbs */}
        <motion.div
          className="absolute w-[400px] h-[400px] top-1/4 right-1/4 bg-neon-blue opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <motion.span
              className="text-primary text-xl font-semibold tracking-wider"
              animate={{
                textShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.8)',
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hi, ich bin
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 glow-text perspective-1000"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.span
              className="text-gradient inline-block"
              animate={{
                rotateX: [0, 2, 0, -2, 0],
                rotateY: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Bastian Giersch
            </motion.span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-4xl mb-8 h-20"
          >
            <TypeAnimation
              sequence={[
                'Fachinformatiker Systemintegration',
                2000,
                'Freelance Web Developer',
                2000,
                'System Administrator',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-400"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Tech-Enthusiast, der die Brücke zwischen Systemadministration und modernem
            Web-Development schlägt. Von Server-Setup bis zur React-App – ich liebe es,
            komplexe Probleme mit sauberem Code zu lösen.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 25px rgba(59, 130, 246, 0.8), 0 0 50px rgba(6, 182, 212, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg font-semibold text-white overflow-hidden group"
              animate={{
                boxShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.8)',
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity },
              }}
            >
              <span className="relative z-10">Projekte ansehen</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-intense rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Kontakt aufnehmen</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center space-x-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  y: -8,
                  rotate: [0, -10, 10, 0],
                }}
                whileTap={{ scale: 0.9 }}
                className={`text-3xl text-gray-400 ${social.color} transition-colors relative`}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  },
                }}
              >
                <motion.div
                  className="relative"
                  whileHover={{
                    filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))',
                  }}
                >
                  <social.icon />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative"
        >
          <motion.div
            className="w-7 h-12 border-2 border-primary rounded-full flex justify-center relative"
            animate={{
              boxShadow: [
                '0 0 10px rgba(59, 130, 246, 0.5)',
                '0 0 20px rgba(59, 130, 246, 0.8)',
                '0 0 10px rgba(59, 130, 246, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <motion.div
              animate={{
                y: [0, 16, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-2 h-4 bg-gradient-to-b from-primary to-secondary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
