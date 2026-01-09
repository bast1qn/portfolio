import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Lightbox from './Lightbox';
import { useTranslation } from 'react-i18next';

const ProjectDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project data - In a real app, this would come from an API or CMS
  const projects = {
    scalesite: {
      id: 'scalesite',
      title: 'ScaleSite',
      titleDe: 'ScaleSite',
      description: 'My freelance business for professional web development. From planning to design to hosting on dedicated servers – everything from one source for small businesses.',
      descriptionDe: 'Mein Freelance-Business für professionelle Webentwicklung. Von Planung über Design bis Hosting auf dedizierten Servern – alles aus einer Hand für kleine Unternehmen.',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop'
      ],
      tags: ['React', 'Hosting', 'Nginx', 'Business'],
      techStack: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Nginx', 'Linux Server', 'Docker', 'SSL Certificates'],
      challenges: [
        'Setting up a secure and performant hosting infrastructure',
        'Creating a seamless CI/CD pipeline for deployments',
        'Balancing modern design with fast load times',
        'Implementing responsive design for all devices'
      ],
      challengesDe: [
        'Einrichtung einer sicheren und leistungsstarken Hosting-Infrastruktur',
        'Erstellung eines nahtlosen CI/CD-Pipelines für Deployments',
        'Balance zwischen modernem Design und schnellen Ladezeiten',
        'Implementierung von responsivem Design für alle Geräte'
      ],
      learnings: [
        'Deep understanding of server administration and security',
        'Performance optimization techniques for web applications',
        'Client communication and project management skills',
        'Best practices for scalable web architecture'
      ],
      learningsDe: [
        'Tiefes Verständnis der Serveradministration und Sicherheit',
        'Performance-Optimierungstechniken für Webanwendungen',
        'Klientenkommunikation und Projektmanagementfähigkeiten',
        'Best Practices für skalierbare Webarchitektur'
      ],
      github: null,
      demo: 'https://scalesite.de',
      status: 'Live'
    },
    lotion: {
      id: 'lotion',
      title: 'Lotion',
      titleDe: 'Lotion',
      description: 'A comprehensive note-taking app inspired by Notion. Features include class management, subjects, mentions, background remover, and a Trello-style carbon board.',
      descriptionDe: 'Eine umfassende Notiz-App inspiriert von Notion. Features umfassen Klassenverwaltung, Fächer, Erwähnungen, Hintergrundentferner und ein Trello-artiges Carbon-Board.',
      images: [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop'
      ],
      tags: ['React', 'TypeScript', 'Notion-Like'],
      techStack: ['React 18', 'TypeScript', 'Redux Toolkit', 'React Router', 'Framer Motion', 'Vite'],
      challenges: [
        'Building a complex state management system for notes and folders',
        'Implementing real-time collaboration features',
        'Creating a flexible and intuitive block-based editor',
        'Managing large amounts of user data efficiently'
      ],
      challengesDe: [
        'Erstellung eines komplexen State-Management-Systems für Notizen und Ordner',
        'Implementierung von Echtzeit-Kollaborationsfeatures',
        'Erstellung eines flexiblen und intuitiven blockbasierten Editors',
        'Effizientes Verwaltung großer Mengen von Benutzerdaten'
      ],
      learnings: [
        'Advanced React patterns and performance optimization',
        'Complex state management with Redux Toolkit',
        'Building scalable editor interfaces',
        'TypeScript best practices for large applications'
      ],
      learningsDe: [
        'Fortgeschrittene React-Patterns und Performance-Optimierung',
        'Komplexes State-Management mit Redux Toolkit',
        'Erstellung skalierbarer Editor-Schnittstellen',
        'TypeScript Best Practices für große Anwendungen'
      ],
      github: 'https://github.com/bast1qn/lotion',
      demo: null,
      status: 'In Development'
    },
    ragepvp: {
      id: 'ragepvp',
      title: 'RagePvP',
      titleDe: 'RagePvP',
      description: 'Minecraft Server (Version 1.21.8) in classic SkyPvP/CityBuild style. Includes community management, Discord integration, and custom plugin configuration.',
      descriptionDe: 'Minecraft Server (Version 1.21.8) im klassischen SkyPvP/CityBuild-Stil. Beinhaltet Community-Management, Discord-Integration und benutzerdefinierte Plug-in-Konfiguration.',
      images: [
        'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop'
      ],
      tags: ['Minecraft', 'Java', 'Linux', 'Community'],
      techStack: ['Java 17', 'Spigot API', 'Minecraft 1.21.8', 'Linux Server', 'JSDiscordAPI', 'MySQL', 'Gradle'],
      challenges: [
        'Managing concurrent players and server performance',
        'Creating custom plugins for unique gameplay features',
        'Integrating Discord bot with in-game events',
        'Balancing game economy and player progression'
      ],
      challengesDe: [
        'Verwaltung gleichzeitiger Spieler und Server-Performance',
        'Erstellung von benutzerdefinierten Plugins für einzigartige Gameplay-Features',
        'Integration von Discord-Bot mit In-Game-Events',
        'Balance der Spielwirtschaft und Spielerprogression'
      ],
      learnings: [
        'Server-side Java programming and optimization',
        'Community management and moderation',
        'API integrations (Discord, databases)',
        'Game design and player engagement strategies'
      ],
      learningsDe: [
        'Serverseitige Java-Programmierung und Optimierung',
        'Community-Management und Moderation',
        'API-Integrationen (Discord, Datenbanken)',
        'Game-Design und Spieler-Engagement-Strategien'
      ],
      github: null,
      demo: null,
      status: 'Hobby Project'
    }
  };

  const project = projects[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  const isGerman = localStorage.getItem('language') === 'de' || localStorage.getItem('i18nextLng') === 'de';

  const breadcrumbItems = [
    { label: isGerman ? 'Start' : 'Home', href: '/' },
    { label: isGerman ? 'Projekte' : 'Projects', href: '/#projects' },
    { label: isGerman ? project.titleDe : project.title }
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Back Button */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 font-medium"
        >
          <FaArrowLeft />
          {t('project_detail.back_to_projects')}
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {isGerman ? project.titleDe : project.title}
            </h1>
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium w-fit">
              {project.status}
            </span>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {isGerman ? project.descriptionDe : project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                <FaExternalLinkAlt />
                {t('project_detail.live_demo')}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg font-semibold text-gray-300 hover:border-primary hover:text-primary transition-all"
              >
                <FaGithub />
                {t('project_detail.source_code')}
              </a>
            )}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">{t('project_detail.gallery')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Click to enlarge</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">{t('project_detail.tech_stack')}</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:border-primary hover:text-primary transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Tags</h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/20 text-primary rounded-lg font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">{t('project_detail.challenges')}</h2>
          <ul className="space-y-4">
            {(isGerman ? project.challengesDe : project.challenges).map((challenge, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-gray-400">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Learnings */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">{t('project_detail.learnings')}</h2>
          <ul className="space-y-4">
            {(isGerman ? project.learningsDe : project.learnings).map((learning, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-400">{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={project.images}
          initialIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </motion.div>
  );
};

export default ProjectDetail;
