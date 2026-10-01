import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.academiquesenaction.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.academiquesenaction.com/en",
      lastModified: new Date(),
    },
  ];
}
