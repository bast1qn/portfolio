import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaEye, FaClock } from 'react-icons/fa';

const AnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState({
    totalVisitors: 0,
    uniqueVisitors: 0,
    pageViews: 0,
    avgTimeOnPage: 0,
    topPages: [],
    recentVisitors: []
  });

  useEffect(() => {
    // Simulate fetching analytics (replace with actual GA4 API)
    const mockAnalytics = {
      totalVisitors: 12543,
      uniqueVisitors: 8934,
      pageViews: 45678,
      avgTimeOnPage: 245, // seconds
      topPages: [
        { path: '/', views: 12453, percentage: 35 },
        { path: '/#projects', views: 8765, percentage: 25 },
        { path: '/#about', views: 6543, percentage: 18 },
        { path: '/#contact', views: 4321, percentage: 12 },
        { path: '/projects/scalesite', views: 2345, percentage: 10 }
      ],
      recentVisitors: [
        { country: 'Germany', city: 'Berlin', time: '2 min ago' },
        { country: 'USA', city: 'New York', time: '5 min ago' },
        { country: 'France', city: 'Paris', time: '8 min ago' },
        { country: 'UK', city: 'London', time: '12 min ago' },
        { country: 'Japan', city: 'Tokyo', time: '15 min ago' }
      ]
    };

    setAnalytics(mockAnalytics);
  }, []);

  const stats = [
    {
      label: 'Total Visitors',
      value: analytics.totalVisitors.toLocaleString(),
      icon: FaUsers,
      color: 'from-blue-500 to-cyan-500',
      change: '+12.5%'
    },
    {
      label: 'Unique Visitors',
      value: analytics.uniqueVisitors.toLocaleString(),
      icon: FaChartLine,
      color: 'from-green-500 to-emerald-500',
      change: '+8.3%'
    },
    {
      label: 'Page Views',
      value: analytics.pageViews.toLocaleString(),
      icon: FaEye,
      color: 'from-purple-500 to-pink-500',
      change: '+15.7%'
    },
    {
      label: 'Avg. Time',
      value: `${Math.floor(analytics.avgTimeOnPage / 60)}:${(analytics.avgTimeOnPage % 60).toString().padStart(2, '0')}`,
      icon: FaClock,
      color: 'from-orange-500 to-red-500',
      change: '+5.2%'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Analytics Dashboard</h1>
          <p className="text-gray-400">Real-time insights into your portfolio performance</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="text-xl text-white" />
                  </div>
                  <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Top Pages</h2>
          <div className="space-y-4">
            {analytics.topPages.map((page, index) => (
              <div key={page.path} className="flex items-center gap-4">
                <div className="text-gray-400 font-semibold w-8">{index + 1}</div>
                <div className="flex-1">
                  <div className="text-white font-mono text-sm">{page.path}</div>
                  <div className="text-gray-400 text-sm">{page.views.toLocaleString()} views</div>
                </div>
                <div className="text-right">
                  <div className="text-primary font-semibold">{page.percentage}%</div>
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${page.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Visitors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Recent Visitors</h2>
          <div className="space-y-3">
            {analytics.recentVisitors.map((visitor, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                    {visitor.country.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-medium">{visitor.city}</div>
                    <div className="text-gray-400 text-sm">{visitor.country}</div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">{visitor.time}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
