import { FaCode, FaServer, FaHeadset } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Web Design & Development',
      description: 'Modern, responsive websites with React and TypeScript. From initial idea to final application – focused on performance and user experience.',
      features: [
        'React & TypeScript',
        'Responsive Design',
        'Tailwind CSS',
        'Modern & Clean',
      ],
    },
    {
      icon: FaServer,
      title: 'Hosting & Maintenance',
      description: 'Professional hosting on dedicated servers. Includes regular backups, updates, and 24/7 monitoring for maximum availability.',
      features: [
        'Nginx & Apache',
        'SSL Certificates',
        'Automatic Backups',
        'Performance Optimization',
      ],
    },
    {
      icon: FaHeadset,
      title: 'IT Support & Consulting',
      description: 'Technical consulting and support for small businesses. From network setup to VM management to selecting the right tech stack.',
      features: [
        'Linux Server Admin',
        'Network Configuration',
        'VM Management',
        'Docker Deployment',
      ],
    },
  ];

  return (
    <section id="services" className="min-h-screen py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What I can do for you and your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-primary transition-all duration-300"
            >
              {/* Service Icon Header */}
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                <service.icon className="text-white text-7xl" />
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-lg">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
