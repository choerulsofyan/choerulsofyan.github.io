/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://choerulsofyan.github.io',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: 'out',
  generateIndexSitemap: false,
}
