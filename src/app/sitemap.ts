import { baseURL, routes as routesConfig } from "@/resources";
import { getPosts } from "@/utils/utils";

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

export default async function sitemap(): Promise<SitemapEntry[]> {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes: SitemapEntry[] = activeRoutes.map((route) => {
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

  return [...routes, ...blogs, ...works];
}
