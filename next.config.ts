const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "/docs/index.html",
      },
      {
        source: "/docs/:path*",
        destination: "/docs/:path*",
      },
    ];
  },
};

export default nextConfig;
