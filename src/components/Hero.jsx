import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/bast1qn', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/bastian-giersch', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com/basti.gier', label: 'Instagram' },
    { icon: FaDiscord, href: 'https://discord.com/users/bast1qn', label: 'Discord' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <div className="mb-4">
            <span className="text-primary text-lg font-medium">{t('hero.greeting')}</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Bastian Giersch
            </span>
          </h1>

          {/* Tagline */}
          <div className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            <span className="text-gray-400">
              {t('hero.tagline')}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all text-center cursor-pointer"
            >
              {t('hero.cta_work')}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-4 border border-gray-700 rounded-lg font-semibold text-gray-300 hover:border-primary hover:text-primary transition-all text-center cursor-pointer"
            >
              {t('hero.cta_contact')}
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="text-2xl" />
              </a>
            ))}
            <a
              href="#contact"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
