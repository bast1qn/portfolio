import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/bastiangiersch', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/bastian-giersch', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-darker border-t border-white border-opacity-10">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FaCode className="text-primary text-3xl" />
              <span className="text-2xl font-bold text-gradient">Bastian Giersch</span>
            </div>
            <p className="text-gray-400 mb-4">
              Fachinformatiker & Freelance Web Developer aus Lutherstadt Wittenberg
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-primary transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter/CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary">Let's Connect</h3>
            <p className="text-gray-400 mb-4">
              Interessiert an einer Zusammenarbeit? Schreib mir eine Nachricht!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Kontakt aufnehmen
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white border-opacity-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Bastian Giersch. Alle Rechte vorbehalten.
            </p>
            <motion.p
              className="text-gray-400 text-sm flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Made with <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <FaHeart />
              </motion.span> and lots of coffee
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.a
        href="#home"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-primary to-secondary text-dark rounded-full shadow-lg hover:shadow-primary/50 transition-all z-40"
        aria-label="Scroll to top"
      >
        <motion.svg
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </motion.svg>
      </motion.a>
    </footer>
  );
};

export default Footer;
