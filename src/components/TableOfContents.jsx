import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaList } from 'react-icons/fa';

const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 w-64"
    >
      <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
        <h3 className="flex items-center gap-2 text-white font-semibold mb-4">
          <FaList />
          On this page
        </h3>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block py-1 px-2 rounded text-sm transition-colors ${
                  activeId === heading.id
                    ? 'bg-primary/20 text-primary font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                style={{ paddingLeft: `${heading.level * 0.5 + 0.5}rem` }}
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export const extractHeadings = (content) => {
  const regex = /<h([2-3])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h\1>/g;
  const headings = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    headings.push({
      level: parseInt(match[1]) - 1,
      id: match[2],
      title: match[3].replace(/<[^>]*>/g, ''),
    });
  }

  return headings;
};

export default TableOfContents;
