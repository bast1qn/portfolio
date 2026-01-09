import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaFilePdf } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

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

    try {
      // EmailJS integration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Bastian Giersch',
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',    // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',   // Replace with your EmailJS Template ID
        templateParams,
        'YOUR_PUBLIC_KEY'     // Replace with your EmailJS Public Key
      );

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const handleDownloadResume = () => {
    // Create a link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume.pdf in public folder
    link.download = 'Bastian_Giersch_Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's talk about it!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Let's <span className="text-primary">Connect</span>
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                I'm always open to new projects, creative ideas, or just a friendly chat
                about technology and development.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all">
                <div className="flex items-center gap-4">
                  <div className="text-3xl text-primary">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:kontakt@scalesite.de"
                      className="text-lg font-semibold text-white hover:text-primary transition-colors"
                    >
                      kontakt@scalesite.de
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all">
                <div className="flex items-center gap-4">
                  <div className="text-3xl text-primary">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-lg font-semibold text-white">
                      Lutherstadt Wittenberg, Germany
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">Working Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700 space-y-4">
                <button
                  onClick={handleDownloadResume}
                  className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
                >
                  <FaFilePdf />
                  Download Resume (CV)
                </button>
                <p className="text-gray-400 text-sm text-center">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl border border-gray-700 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-white">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none text-white placeholder-gray-500"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600'
                    : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-900/30 border border-green-600 rounded-lg p-4 mb-4">
                  <p className="text-green-400 text-center font-medium">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-900/30 border border-red-600 rounded-lg p-4 mb-4">
                  <p className="text-red-400 text-center font-medium">
                    ✗ Failed to send message. Please try again or email me directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
