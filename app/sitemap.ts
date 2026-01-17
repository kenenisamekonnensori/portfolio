import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kenenisa.dev",
      lastModified: new Date(),
    },
  ];
}
