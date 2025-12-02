import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:projectid((?!_next|favicon.ico|robots.txt|sitemap.xml|icon|apple|android|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg).+)",
        destination: "/projects/:projectid",
        permanent: true,
      },
    ];
  }
  
};

export default nextConfig;
