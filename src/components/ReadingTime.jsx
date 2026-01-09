import { useMemo, useState, useEffect } from 'react';
import { FaClock, FaBookOpen } from 'react-icons/fa';

export const ReadingTime = ({ content }) => {
  const readingTime = useMemo(() => {
    const wordsPerMinute = 200;
    const text = typeof content === 'string' ? content : content?.toString() || '';
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  }, [content]);

  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <FaClock />
      <span>{readingTime} min read</span>
    </div>
  );
};

export const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const trackLength = documentHeight - windowHeight;
      const progressVal = scrollTop / trackLength;
      setProgress(Math.min(progressVal * 100, 100));
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingTime;
