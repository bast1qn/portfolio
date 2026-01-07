import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa';
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
    { icon: FaGithub, href: 'https://github.com/bast1qn', color: 'hover:text-white', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/bastian-giersch', color: 'hover:text-blue-500', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com/basti.gier', color: 'hover:text-pink-500', label: 'Instagram' },
    { icon: FaDiscord, href: 'https://discord.com/users/bast1qn', color: 'hover:text-indigo-500', label: 'Discord' },
    { icon: FaEnvelope, href: '#contact', color: 'hover:text-primary', label: 'Email' },
  ];

  // Professional Particle configuration - Minimal & Elegant
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 15,
    color: ['from-primary', 'from-secondary', 'from-accent'][Math.floor(Math.random() * 3)],
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>

      {/* Professional Animated Background - Subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-primary opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            scale: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-secondary opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            scale: { duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 },
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent opacity-8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            scale: { duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 4 },
          }}
        />
      </div>

      {/* Professional Particle System - Minimal & Elegant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-gradient-to-r ${particle.color} via-secondary to-accent`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              filter: `blur(${particle.size * 0.8}px)`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.4, 0],
              scale: [0, 0.8, 0],
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

          {/* Professional Name - Clean & Elegant */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 font-poppins relative"
          >
            <span className="text-gradient-professional inline-block relative">
              Bastian Giersch
              {/* Subtle elegant glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent opacity-10 blur-3xl -z-10"
                animate={{
                  opacity: [0.08, 0.12, 0.08],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </span>
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

          {/* Professional CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-professional px-8 py-4 rounded-lg font-semibold text-white font-poppins relative group"
            >
              <span className="relative z-10">Projekte ansehen</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 glass-premium rounded-lg font-semibold font-poppins hover:bg-white hover:bg-opacity-10 transition-all relative overflow-hidden group shadow-elegant"
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

          {/* Professional Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                }}
                whileTap={{ scale: 0.9 }}
                className={`text-3xl text-gray-400 ${social.color} transition-all relative group`}
              >
                <motion.div
                  className="relative p-3 rounded-full glass-premium"
                  whileHover={{
                    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  <social.icon />
                  {/* Elegant ring on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
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
