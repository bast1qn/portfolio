import { FaGithub, FaLinkedin, FaHeart, FaCode, FaInstagram, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/bast1qn', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/bastian-giersch', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com/basti.gier', label: 'Instagram' },
    { icon: FaDiscord, href: 'https://discord.com/users/bast1qn', label: 'Discord' },
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaCode className="text-primary text-3xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bastian Giersch
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              IT Specialist & Freelance Web Developer from Lutherstadt Wittenberg
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { key: 'home', label: t('nav.home') },
                { key: 'about', label: t('nav.about') },
                { key: 'projects', label: t('nav.projects') },
                { key: 'services', label: t('nav.services') },
                { key: 'contact', label: t('nav.contact') }
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.key}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-primary transition-colors inline-block cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/impressum" className="text-gray-400 hover:text-primary transition-colors inline-block">
                  {t('footer.imprint')}
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-gray-400 hover:text-primary transition-colors inline-block">
                  {t('footer.privacy')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Bastian Giersch. {t('footer.rights')}
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <FaHeart className="text-red-500" /> in Germany
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
