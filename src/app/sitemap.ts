import { baseURL } from "@/resources";

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

export default async function sitemap(): Promise<SitemapEntry[]> {
  const existingRoutes = ["/", "/about", "/services", "/about-me", "/contact"];

  const routes: SitemapEntry[] = existingRoutes.map((route) => {
    const url = `${baseURL}${route !== "/" ? route : ""}`;
    // Homepage gets highest priority
    if (route === "/") {
      return {
        url,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "weekly" as const,
        priority: 1.0,
      };
    }
    // Important pages get high priority
    if (route === "/services" || route === "/contact") {
      return {
        url,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "monthly" as const,
        priority: 0.9,
      };
    }
    // Other pages
    return {
      url,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return routes;
}
