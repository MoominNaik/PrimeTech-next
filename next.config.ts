import type { NextConfig } from "next";


const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint errors from breaking build
  },
};

module.exports = nextConfig;