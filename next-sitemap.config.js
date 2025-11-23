/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://aadiwood.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/api/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        additionalSitemaps: [
            'https://aadiwood.com/sitemap.xml',
        ],
    },
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    transform: async (config, path) => {
        // Custom priority and changefreq based on path
        const customPriority = path === '/' ? 1.0 : 0.7;
        const customChangefreq = path === '/' ? 'daily' : 'weekly';

        return {
            loc: path,
            changefreq: customChangefreq,
            priority: customPriority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        };
    },
};
