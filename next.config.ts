import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect old project URLs to new /projects structure
      {
        source: "/CAD",
        destination: "/projects/CAD",
        permanent: true, // 308 redirect (SEO-friendly)
      },
      {
        source: "/end_470_project",
        destination: "/projects/470_project",
        permanent: true,
      },
      {
        source: "/470_project",
        destination: "/projects/470_project",
        permanent: true,
      },
      {
        source: "/isba.ai",
        destination: "/projects/isba.ai",
        permanent: true,
      },
      {
        source: "/led_chessboard",
        destination: "/projects/led_chessboard",
        permanent: true,
      },
      {
        source: "/all",
        destination: "/projects/all",
        permanent: true,
      },
      // Add more redirects as needed
      // {
      //   source: "/old-path",
      //   destination: "/new-path",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
