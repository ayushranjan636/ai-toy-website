import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: { root: __dirname },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    // Optimised images are content-addressed; keep them cached for 31 days.
    minimumCacheTTL: 2678400,
  },
  compress: true,
  async headers() {
    const longCache = { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" };
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
      { source: "/images/:path*", headers: [longCache] },
      { source: "/video/:path*", headers: [longCache] },
      { source: "/og-image.jpg", headers: [longCache] },
    ];
  },
};

export default nextConfig;
