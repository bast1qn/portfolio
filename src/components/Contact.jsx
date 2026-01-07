import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'kontakt@scalesite.de',
      href: 'mailto:kontakt@scalesite.de',
      color: 'text-primary',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Standort',
      value: 'Lutherstadt Wittenberg, Deutschland',
      href: null,
      color: 'text-secondary',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>

      {/* Background decoration - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-20 w-[500px] h-[500px] bg-primary opacity-15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            y: [0, -60, 0],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-20 w-[500px] h-[500px] bg-accent opacity-15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.6, 1],
            y: [0, 60, 0],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 16,
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
            Kontakt <span className="text-gradient">Aufnehmen</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hast du ein Projekt im Kopf? Lass uns darüber sprechen!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Lass uns <span className="text-gradient">connecten</span>
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Ich bin immer offen für neue Projekte, kreative Ideen oder einfach
                nur für einen netten Chat über Technologie und Development.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    x: 5,
                    y: -3,
                  }}
                  className="glass-premium p-6 rounded-xl flex items-center gap-4 group card-professional shadow-elegant relative overflow-hidden"
                >
                  {/* Elegant gradient overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 elegant-gradient"
                    transition={{
                      duration: 0.4,
                    }}
                  />
                  <motion.div
                    className={`text-3xl ${item.color} relative z-10`}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                    }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                  >
                    <item.icon />
                  </motion.div>
                  <div className="relative z-10">
                    <p className="text-gray-400 text-sm font-inter">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-semibold font-poppins hover:text-gradient-professional transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold font-poppins">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mt-12"
            >
              <div className="text-9xl text-center">💬</div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-3xl -z-10"></div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-premium p-8 rounded-2xl space-y-6 shadow-elegant relative overflow-hidden">
              {/* Professional form border */}
              <motion.div
                className="absolute inset-0 opacity-20 pointer-events-none"
                animate={{
                  background: [
                    'linear-gradient(0deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                    'linear-gradient(360deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Dein Name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="deine@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-300">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Worum geht's?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Deine Nachricht..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(6, 182, 212, 0.6)',
                }}
                whileTap={{ scale: 0.95 }}
                animate={!isSubmitting && submitStatus !== 'success' ? {
                  boxShadow: [
                    '0 0 10px rgba(59, 130, 246, 0.5)',
                    '0 0 25px rgba(59, 130, 246, 0.8)',
                    '0 0 10px rgba(59, 130, 246, 0.5)',
                  ],
                } : {}}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all relative overflow-hidden ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600'
                    : 'bg-gradient-to-r from-primary via-secondary to-accent text-white'
                }`}
              >
                {!isSubmitting && submitStatus !== 'success' && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                )}
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Wird gesendet...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    ✓ Nachricht gesendet!
                  </>
                ) : (
                  <>
                    Nachricht senden
                    <FaPaperPlane />
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center text-sm"
                >
                  Danke für deine Nachricht! Ich melde mich bald bei dir.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
