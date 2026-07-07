import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kairoseventosmg.com.ar";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
  ];
}
