import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: process.env.NEXT_OUTPUT === "export" ? "export" : undefined,
  cacheComponents: process.env.NEXT_OUTPUT !== "export",
  partialPrefetching: process.env.NEXT_OUTPUT !== "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
