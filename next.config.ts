import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:projectid",
        destination: "/projects/:projectid",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
