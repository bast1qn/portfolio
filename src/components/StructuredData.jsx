import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StructuredData = () => {
  const location = useLocation();

  useEffect(() => {
    // Base schema for the organization/person
    const baseSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': 'https://bastian-giersch.de/#person',
          name: 'Bastian Giersch',
          url: 'https://bastian-giersch.de',
          image: 'https://bastian-giersch.de/og-image.jpg',
          sameAs: [
            'https://github.com/bast1qn',
            'https://www.linkedin.com/in/bastian-giersch'
          ],
          jobTitle: 'IT Specialist & Web Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance'
          },
          description: 'IT Specialist for System Integration and Freelance Web Developer from Lutherstadt Wittenberg. Specialized in React, TypeScript, Linux, and modern web development.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Lutherstadt Wittenberg',
            addressCountry: 'Germany'
          }
        },
        {
          '@type': 'WebSite',
          '@id': 'https://bastian-giersch.de/#website',
          url: 'https://bastian-giersch.de',
          name: 'Bastian Giersch - Portfolio',
          description: 'IT Specialist for System Integration and Freelance Web Developer from Lutherstadt Wittenberg. React, TypeScript, Linux, Web Development, and IT Support.',
          publisher: {
            '@id': 'https://bastian-giersch.de/#person'
          },
          inLanguage: 'de-DE',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://bastian-giersch.de/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://bastian-giersch.de/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Projects',
              item: 'https://bastian-giersch.de/#projects'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'About',
              item: 'https://bastian-giersch.de/#about'
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Services',
              item: 'https://bastian-giersch.de/#services'
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Contact',
              item: 'https://bastian-giersch.de/#contact'
            }
          ]
        }
      ]
    };

    // Project-specific schemas
    const projects = [
      {
        '@type': 'SoftwareApplication',
        name: 'Scalesite',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR'
        },
        url: 'https://bastian-giersch.de/projects/scalesite',
        description: 'Scale modeling community platform'
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Lotion',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web',
        url: 'https://bastian-giersch.de/projects/lotion',
        description: 'Note-taking application with Notion-like ease of use'
      },
      {
        '@type': 'SoftwareApplication',
        name: 'RagePVP',
        applicationCategory: 'GameApplication',
        operatingSystem: 'Web',
        url: 'https://bastian-giersch.de/projects/ragepvp',
        description: 'Competitive gaming platform'
      }
    ];

    // Add projects to graph if on homepage or projects page
    if (location.pathname === '/' || location.pathname.includes('projects')) {
      baseSchema['@graph'].push(...projects);
    }

    // Service schema
    const services = {
      '@type': 'ProfessionalService',
      name: 'Web Development Services',
      description: 'Custom web development services including React, TypeScript, Node.js, and full-stack solutions',
      provider: {
        '@id': 'https://bastian-giersch.de/#person'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Germany'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Frontend Development'
            },
            description: 'Modern, responsive frontend with React and TypeScript'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Backend Development'
            },
            description: 'Robust backend solutions with Node.js and databases'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Full-Stack Development'
            },
            description: 'Complete web applications from concept to deployment'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'IT Consulting'
            },
            description: 'Professional IT support and system integration'
          }
        ]
      }
    };

    // Add services schema if on homepage or services page
    if (location.pathname === '/' || location.pathname.includes('services')) {
      baseSchema['@graph'].push(services);
    }

    // Create or update JSON-LD script tag
    let scriptTag = document.getElementById('structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(baseSchema, null, 2);
  }, [location]);

  return null; // This component doesn't render anything
};

export default StructuredData;
