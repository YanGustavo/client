module.exports = {
  siteUrl: 'https://seu-site.com',
  generateRobotsTxt: true,
  exclude: ['/admin'], // URLs que devem ser excluídas do sitemap
  robotsTxtOptions: {
    additionalSitemaps: ['https://eaichefinho.com.br/sitemap.xml'],
  },
};
