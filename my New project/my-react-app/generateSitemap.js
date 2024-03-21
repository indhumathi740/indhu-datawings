const fs = require('fs');
const { create } = require('xmlbuilder2');

// Replace these URLs with the actual URLs of your React app
const siteUrl = 'https://datawings.co.in';
const pages = [
  '/',
  '/aboutus',
  '/packages',
  '/blog',
  '/Internet-service-Provider',
  '/InternetLeasedLine',
  '/SMEinternet',
  '/Businessbroadband',
  
  // Add more pages as needed
];

const generateSitemap = () => {
  const root = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  pages.forEach((page) => {
    root.ele('url').ele('loc').txt(`${siteUrl}${page}`);
  });

  const xml = root.end({ prettyPrint: true });

  fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
};

generateSitemap();
