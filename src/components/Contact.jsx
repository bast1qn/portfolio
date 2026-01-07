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
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
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
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="glass p-6 rounded-xl flex items-center gap-4 group cursor-pointer"
                >
                  <div className={`text-3xl ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-semibold hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold">{item.value}</p>
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
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600'
                    : 'bg-gradient-to-r from-primary to-secondary text-dark hover:shadow-lg hover:shadow-primary/50'
                }`}
              >
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
