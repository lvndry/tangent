import { baseURL, protectedRoutes } from "@/resources";

export default function robots() {
  // Get all protected routes that should be disallowed
  const disallowPaths = Object.keys(protectedRoutes).filter(
    (route) => protectedRoutes[route as keyof typeof protectedRoutes]
  );

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Disallow API routes
          ...disallowPaths, // Disallow password-protected routes
        ],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
