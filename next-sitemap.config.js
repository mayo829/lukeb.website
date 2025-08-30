/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://lukeb.vercel.app/',  // replace with your deployed site
    generateRobotsTxt: true,            // generates robots.txt automatically
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/admin/*', '/api/*'],    // paths to exclude
  };
  