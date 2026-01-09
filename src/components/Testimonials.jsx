import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Thomas Müller',
      role: 'CEO, TechStartup GmbH',
      company: 'TechStartup GmbH',
      avatar: '👨‍💼',
      rating: 5,
      content: 'Bastian delivered an outstanding website for our company. His technical expertise and attention to detail exceeded our expectations. The project was completed on time and within budget.',
      contentDe: 'Bastian hat eine hervorragende Website für unser Unternehmen geliefert. Seine technische Expertise und Aufmerksamkeit für Details haben unsere Erwartungen übertroffen. Das Projekt wurde pünktlich und im Budget abgeschlossen.'
    },
    {
      id: 2,
      name: 'Sarah Schmidt',
      role: 'Marketing Director',
      company: 'Digital Solutions AG',
      avatar: '👩‍💻',
      rating: 5,
      content: 'Working with Bastian was a pleasure. He understood our requirements perfectly and implemented them with great precision. The responsive design works flawlessly across all devices.',
      contentDe: 'Die Zusammenarbeit mit Bastian war ein Vergnügen. Er verstand unsere Anforderungen perfekt und setzte sie mit großer Präzision um. Das responsive Design funktioniert einwandfrei auf allen Geräten.'
    },
    {
      id: 3,
      name: 'Michael Weber',
      role: 'Founder',
      company: 'Weber E-Commerce',
      avatar: '👨‍💼',
      rating: 5,
      content: 'Exceptional problem-solving skills and deep knowledge of modern web technologies. Bastian transformed our outdated website into a high-performing, modern platform.',
      contentDe: 'Außergewöhnliche Problemlösungskompetenz und tiefes Verständnis moderner Web-Technologien. Bastian hat unsere veraltete Website in eine leistungsstarke, moderne Plattform verwandelt.'
    }
  ];

  const partners = [
    { name: 'ScaleSite', logo: '🚀', url: 'https://scalesite.de' },
    { name: 'TechStartup', logo: '💼', url: '#' },
    { name: 'Digital Solutions', logo: '🌐', url: '#' },
    { name: 'Weber E-Commerce', logo: '🛒', url: '#' },
    { name: 'Innovate Labs', logo: '🔬', url: '#' },
    { name: 'CloudNine', logo: '☁️', url: '#' }
  ];

  return (
    <section className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feedback from clients I've had the pleasure of working with
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-primary">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="border-t border-gray-800 pt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Trusted By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <span className="text-4xl">{partner.logo}</span>
                <span className="font-medium">{partner.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
