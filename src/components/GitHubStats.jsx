import { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaEye, FaUsers } from 'react-icons/fa';

const GITHUB_USERNAME = 'bast1qn';

const GitHubStats = () => {
  const [stats, setStats] = useState({
    repos: 0,
    stars: 0,
    forks: 0,
    followers: 0,
    totalCommits: 0
  });
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch complete GitHub stats
    const fetchGitHubStats = async () => {
      try {
        // Fetch user profile
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user');
        const userData = await userResponse.json();

        // Fetch user's repos (paginated, fetch 100 per page)
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );
        if (!reposResponse.ok) throw new Error('Failed to fetch repos');
        const reposData = await reposResponse.json();

        // Calculate total stars and forks
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((sum, repo) => sum + repo.forks_count, 0);

        // Fetch recent activity (events)
        let totalCommits = 0;
        try {
          const eventsResponse = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=30`
          );
          if (eventsResponse.ok) {
            const eventsData = await eventsResponse.json();
            totalCommits = eventsData.filter(event => event.type === 'PushEvent').length;
          }
        } catch (error) {
          console.warn('Could not fetch events:', error);
        }

        setStats({
          repos: userData.public_repos,
          stars: totalStars,
          forks: totalForks,
          followers: userData.followers,
          totalCommits
        });

        // Set featured repos (top 6 by stars)
        const featuredRepos = reposData
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6)
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description available',
            language: repo.language,
            languageColor: getLanguageColor(repo.language),
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            url: repo.html_url,
            updatedAt: repo.updated_at,
            topics: repo.topics || []
          }));

        setRepos(featuredRepos);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Set default values on error
        setStats({
          repos: 25,
          stars: 150,
          forks: 75,
          followers: 89,
          totalCommits: 500
        });

        // Set fallback repos
        setRepos([
          {
            id: 1,
            name: 'lotion',
            description: 'A comprehensive note-taking app inspired by Notion',
            language: 'TypeScript',
            languageColor: '#3178c6',
            stars: 42,
            forks: 12,
            url: `https://github.com/${GITHUB_USERNAME}/lotion`,
            updatedAt: new Date().toISOString(),
            topics: ['react', 'typescript', 'notion']
          },
          {
            id: 2,
            name: 'portfolio',
            description: 'Personal portfolio website built with React',
            language: 'JavaScript',
            languageColor: '#f1e05a',
            stars: 28,
            forks: 8,
            url: `https://github.com/${GITHUB_USERNAME}/portfolio`,
            updatedAt: new Date().toISOString(),
            topics: ['react', 'portfolio', 'vite']
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  // Helper function to get language colors
  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      Python: '#3572A5',
      Java: '#b07219',
      'C++': '#f34b7d',
      Ruby: '#701516',
      Go: '#00ADD8',
      Rust: '#dea584',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Shell: '#89e051',
      Vue: '#41b883',
      React: '#61dafb'
    };
    return colors[language] || '#8b949e';
  };

  const statCards = [
    {
      icon: FaCodeBranch,
      label: 'Public Repos',
      value: stats.repos,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaStar,
      label: 'Stars Earned',
      value: stats.stars,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaCodeBranch,
      label: 'Total Forks',
      value: stats.forks,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaUsers,
      label: 'Followers',
      value: stats.followers,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Open Source <span className="text-primary">Contributions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Active contributor to the open-source community
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="text-3xl text-gray-400 group-hover:text-primary transition-colors" />
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg opacity-20`}></div>
              </div>
              {loading ? (
                <div className="h-8 bg-gray-700 rounded animate-pulse"></div>
              ) : (
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              )}
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Repositories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Featured Repositories
          </h3>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="animate-pulse space-y-3">
                    <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary transition-all duration-300 group block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors flex items-center gap-2 mb-2">
                        <FaGithub className="text-sm" />
                        {repo.name}
                      </h4>
                      <p className="text-gray-400 text-sm line-clamp-2">{repo.description}</p>
                    </div>
                  </div>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    {repo.language && (
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: repo.languageColor }}
                        ></span>
                        {repo.language}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCodeBranch className="text-primary" />
                      {repo.forks}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* GitHub Profile Button */}
        <div className="text-center">
          <a
            href="https://github.com/bast1qn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            <FaGithub className="text-xl" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
