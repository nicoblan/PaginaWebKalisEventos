import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kairoseventos.com.ar";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
  ];
}
