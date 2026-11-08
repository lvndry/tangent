/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/about-me", destination: "/#about", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.logo.dev",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
