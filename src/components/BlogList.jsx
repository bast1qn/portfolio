import { Link as RouterLink } from 'react-router-dom';
import { useState, useMemo, memo, useCallback } from 'react';
import { FaCalendar, FaClock, FaTag, FaArrowRight } from 'react-icons/fa';
import { format } from 'date-fns';
import { de, enGB } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import { blogPosts } from '../data/blogPosts';

// Memoized blog card component
const BlogCard = memo(({ post, isGerman }) => {
  return (
    <article className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-primary transition-all duration-300 group flex flex-col h-full">
      {/* Post Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={isGerman ? post.titleDe : post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Post Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {isGerman ? post.titleDe : post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
          {isGerman ? post.excerptDe : post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <FaCalendar className="text-primary" />
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMM dd, yyyy', {
                locale: isGerman ? de : enGB
              })}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-primary" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <RouterLink
          to={`/blog/${post.id}`}
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-sm"
        >
          Read More
          <FaArrowRight className="text-xs" />
        </RouterLink>
      </div>
    </article>
  );
});

BlogCard.displayName = 'BlogCard';

const BlogList = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState(null);

  const isGerman = i18n.language === 'de';

  // Get unique categories and tags
  const categories = useMemo(() => ['All', ...new Set(blogPosts.map(post => post.category))], []);
  const tags = useMemo(() => {
    const allTags = blogPosts.flatMap(post => post.tags);
    return [...new Set(allTags)];
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
      const tagMatch = !selectedTag || post.tags.includes(selectedTag);
      return categoryMatch && tagMatch;
    });
  }, [selectedCategory, selectedTag]);

  // Memoized handlers
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
    setSelectedTag(null);
  }, []);

  const handleTagChange = useCallback((tag) => {
    setSelectedTag(tag);
  }, []);

  return (
    <section id="blog" className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-primary">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tag Filter */}
        {selectedCategory !== 'All' && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => handleTagChange(null)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                !selectedTag
                  ? 'bg-primary/20 text-primary border border-primary'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              All Tags
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagChange(tag)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  selectedTag === tag
                    ? 'bg-primary/20 text-primary border border-primary'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} isGerman={isGerman} />
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
