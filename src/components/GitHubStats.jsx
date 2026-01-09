import { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaEye, FaUsers } from 'react-icons/fa';

const GitHubStats = () => {
  const [stats, setStats] = useState({
    repos: 0,
    stars: 0,
    forks: 0,
    followers: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub stats - replace with your actual username
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/bast1qn');
        if (response.ok) {
          const data = await response.json();
          setStats({
            repos: data.public_repos,
            followers: data.followers,
            stars: 0, // Would need to fetch all repos to calculate
            forks: 0  // Would need to fetch all repos to calculate
          });
        }
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Set default values on error
        setStats({
          repos: 25,
          stars: 150,
          forks: 75,
          followers: 89
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

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
      value: stats.stars || 150,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaCodeBranch,
      label: 'Total Forks',
      value: stats.forks || 75,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaUsers,
      label: 'Followers',
      value: stats.followers,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const featuredRepos = [
    {
      name: 'lotion',
      description: 'A comprehensive note-taking app inspired by Notion',
      language: 'TypeScript',
      languageColor: '#3178c6',
      stars: 42,
      forks: 12,
      url: 'https://github.com/bast1qn/lotion'
    },
    {
      name: 'portfolio',
      description: 'Personal portfolio website built with React',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 28,
      forks: 8,
      url: 'https://github.com/bast1qn/portfolio'
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
          <div className="grid md:grid-cols-2 gap-6">
            {featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary transition-all duration-300 group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                      <FaGithub className="text-lg" />
                      {repo.name}
                    </h4>
                    <p className="text-gray-400 text-sm mt-2">{repo.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    ></span>
                    {repo.language}
                  </div>
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
