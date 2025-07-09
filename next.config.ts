import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "miva-university.s3.eu-west-2.amazonaws.com",
        port:"",
        pathname:"/wp-content/uploads/**"
      }
    ]
  }
};

export default nextConfig;
