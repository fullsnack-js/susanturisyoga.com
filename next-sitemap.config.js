/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://www.susanturisyoga.com/'
const sitemapConfig = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
     
    },
}

export default sitemapConfig