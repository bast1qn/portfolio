import { motion } from 'framer-motion';
import { FaCode, FaServer, FaHeadset } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Webdesign & Entwicklung',
      description: 'Moderne, responsive Websites mit React und TypeScript. Von der ersten Idee bis zur fertigen Anwendung – fokussiert auf Performance und User Experience.',
      features: [
        'React & TypeScript',
        'Responsive Design',
        'Tailwind CSS',
        'Modern & Clean',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaServer,
      title: 'Hosting & Wartung',
      description: 'Professionelles Hosting auf eigenen Dedicated Servern. Inklusive regelmäßiger Backups, Updates und 24/7 Monitoring für maximale Verfügbarkeit.',
      features: [
        'Nginx & Apache',
        'SSL-Zertifikate',
        'Automatische Backups',
        'Performance-Optimierung',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaHeadset,
      title: 'IT-Support & Beratung',
      description: 'Technische Beratung und Support für kleine Unternehmen. Von Netzwerk-Setup über VM-Management bis zur Auswahl der richtigen Tech-Stack.',
      features: [
        'Linux Server-Admin',
        'Netzwerk-Konfiguration',
        'VM-Management',
        'Docker Deployment',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  // Constellation stars configuration
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 4,
  }));

  return (
    <section id="services" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>

      {/* Background decoration - Enhanced with morphing blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 left-20 w-[500px] h-[500px] bg-primary opacity-15 rounded-full blur-3xl morphing-blob"
          animate={{
            scale: [1, 1.4, 1],
            rotate: 360,
            x: [0, 100, 0],
          }}
          transition={{
            scale: { duration: 10, repeat: Infinity },
            rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
            x: { duration: 15, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-secondary opacity-15 rounded-full blur-3xl morphing-blob"
          animate={{
            scale: [1, 1.5, 1],
            rotate: -360,
            y: [0, -100, 0],
          }}
          transition={{
            scale: { duration: 12, repeat: Infinity },
            rotate: { duration: 35, repeat: Infinity, ease: 'linear' },
            y: { duration: 18, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-accent opacity-12 rounded-full blur-3xl morphing-blob"
          animate={{
            scale: [1, 1.7, 1],
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Constellation Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
              boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, 0.8)`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: star.delay,
              ease: 'easeInOut',
            }}
          />
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
            Meine <span className="text-gradient">Dienstleistungen</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Was ich für dich und dein Business tun kann
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{
                y: -20,
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                boxShadow: '0 30px 60px rgba(59, 130, 246, 0.4), 0 0 50px rgba(139, 92, 246, 0.3)',
              }}
              className="glass-intense rounded-2xl overflow-hidden group perspective-card"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Service Icon Header */}
              <div className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                  }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className="text-white text-7xl relative z-10"
                >
                  <service.icon />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                />
                {/* Rotating gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white opacity-0 group-hover:opacity-20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Interesse an einer Zusammenarbeit?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-dark hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Jetzt Kontakt aufnehmen
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
