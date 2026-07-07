export function GET() {
  const sitemapUrl = "https://kairoseventos.com.ar/sitemap.xml";
  const content = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
