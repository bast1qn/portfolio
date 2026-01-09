import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaCalendar, FaClock, FaTag, FaUser, FaArrowLeft } from 'react-icons/fa';
import { format } from 'date-fns';
import { de, enGB } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { blogPosts } from '../data/blogPosts';
import Breadcrumb from './Breadcrumb';
import 'highlight.js/styles/github-dark.css';

const BlogPost = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const isGerman = i18n.language === 'de';

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link
            to="/blog"
            className="text-primary hover:text-accent transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: isGerman ? 'Start' : 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: isGerman ? post.titleDe : post.title }
  ];

  return (
    <article className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 font-medium"
        >
          <FaArrowLeft />
          {isGerman ? 'Zurück' : 'Back'}
        </button>

        {/* Header Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={isGerman ? post.titleDe : post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {isGerman ? post.titleDe : post.title}
            </h1>
          </div>
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <FaUser className="text-primary" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendar className="text-primary" />
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM dd, yyyy', {
                locale: isGerman ? de : enGB
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-primary" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-800 rounded-full text-sm text-gray-300"
            >
              <FaTag className="text-xs text-primary" />
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold text-white mt-12 mb-6">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-bold text-white mt-10 mb-5">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 leading-relaxed mb-6">{children}</p>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-primary hover:text-accent transition-colors underline"
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-300">{children}</li>
              ),
              code: ({ inline, className, children }) => {
                if (inline) {
                  return (
                    <code className="px-2 py-1 bg-gray-800 rounded text-sm text-accent">
                      {children}
                    </code>
                  );
                }
                return (
                  <code className={className}>
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto mb-6 border border-gray-700">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-400 my-6">
                  {children}
                </blockquote>
              ),
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt}
                  className="rounded-lg my-8 w-full"
                  loading="lazy"
                />
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full divide-y divide-gray-700">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-800">{children}</thead>
              ),
              tbody: ({ children }) => (
                <tbody className="divide-y divide-gray-700">{children}</tbody>
              ),
              tr: ({ children }) => (
                <tr className="hover:bg-gray-800/50">{children}</tr>
              ),
              th: ({ children }) => (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {children}
                </td>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-bold text-white mb-4">Share this article</h3>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(isGerman ? post.titleDe : post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 transition-colors"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-primary transition-all group"
                >
                  <div className="flex gap-4 p-4">
                    <img
                      src={relatedPost.image}
                      alt={isGerman ? relatedPost.titleDe : relatedPost.title}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-primary transition-colors mb-2">
                        {isGerman ? relatedPost.titleDe : relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {isGerman ? relatedPost.excerptDe : relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
