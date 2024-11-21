const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.9 },
    { url: '/designing', changefreq: 'weekly', priority: 0.8 },
    { url: '/ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/other-services', changefreq: 'weekly', priority: 0.7 },
    { url: '/book-editing', changefreq: 'weekly', priority: 0.7 },
    { url: '/about-us', changefreq: 'weekly', priority: 0.7 },
    { url: '/contact-us', changefreq: 'weekly', priority: 0.7 },
    { url: '/privacy-policy', changefreq: 'weekly', priority: 0.7 },
    { url: '/lp', changefreq: 'weekly', priority: 0.7 },
    { url: '/privacy-policy', changefreq: 'weekly', priority: 0.7 },
    { url: '/terms-condition', changefreq: 'weekly', priority: 0.7 },
    { url: '/thank-you', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/fiction-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/non-fiction-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/science-fiction-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/memoir-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/childrens-book-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/cookbook-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/adventure-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/business-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/fantasy-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/medical-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/historical-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/short-stories-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/mystery-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/ebook-writing', changefreq: 'weekly', priority: 0.7 },
    { url: '/ghostwriting/legal-ghostwriting', changefreq: 'weekly', priority: 0.7 },
    { url: '/designing/author-website-design', changefreq: 'weekly', priority: 0.7 },
    { url: '/designing/logo-design', changefreq: 'weekly', priority: 0.7 },
    { url: '/designing/stationery-design', changefreq: 'weekly', priority: 0.7 },
    { url: '/designing/book-teaser', changefreq: 'weekly', priority: 0.7 },
    { url: '/designing/book-printing', changefreq: 'weekly', priority: 0.7 },
    { url: '/designing/book-illustrations', changefreq: 'weekly', priority: 0.7 },
    { url: '/designing/book-interior-formatting', changefreq: 'weekly', priority: 0.7 },
    { url: '/designing/letterhead-envelope-design', changefreq: 'weekly', priority: 0.7 },
    { url: '/designing/business-card-design', changefreq: 'weekly', priority: 0.7 },
    { url: '/book-editing/book-editing', changefreq: 'weekly', priority: 0.7 },
    { url: '/book-editing/novel-editing', changefreq: 'weekly', priority: 0.7 },
    { url: '/book-editing/poetry-editing', changefreq: 'weekly', priority: 0.7 },
    { url: '/book-editing/screenplay-editing', changefreq: 'weekly', priority: 0.7 },
    { url: '/book-editing/shorts-story-editing', changefreq: 'weekly', priority: 0.7 },
    { url: '/book-editing/bookproof-reading', changefreq: 'weekly', priority: 0.7 },
    { url: '/book-editing/fiction-book-editing', changefreq: 'weekly', priority: 0.7 },
    { url: '/book-editing/non-fiction-book-editing', changefreq: 'weekly', priority: 0.7 },
    { url: '/book-editing/self-editing-fiction-writers', changefreq: 'weekly', priority: 0.7 },
    { url: '/other-services/book-writing', changefreq: 'weekly', priority: 0.7 },
    { url: '/other-services/book-publishing', changefreq: 'weekly', priority: 0.7 },
    { url: '/other-services/book-marketing', changefreq: 'weekly', priority: 0.7 },
    { url: '/other-services/video-book-trailers', changefreq: 'weekly', priority: 0.7 },
    { url: '/other-services/social-media-marketing', changefreq: 'weekly', priority: 0.7 },
    { url: '/other-services/amazon-marketing', changefreq: 'weekly', priority: 0.7 },
    { url: '/other-services/seo-services', changefreq: 'weekly', priority: 0.7 },
    { url: '/other-services/audiobook', changefreq: 'weekly', priority: 0.7 },
    { url: '/other-services/book-review', changefreq: 'weekly', priority: 0.7 },
    
    // Add more routes as needed
  ];

  const stream = new SitemapStream({ hostname: 'https://amzbookpublishing.net' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  stream.pipe(writeStream);
  links.forEach(link => stream.write(link));
  stream.end();

  await streamToPromise(stream); // wait until the stream is fully written
}

generateSitemap().then(() => {
  console.log('Sitemap generated successfully');
});
