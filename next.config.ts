import type { NextConfig } from "next";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "test.drwafaakamel.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
