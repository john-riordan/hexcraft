const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/ingest/:path*",
        destination: "https://app.posthog.com/:path*",
      },
    ];
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    domains: [
      {
        domain: "lolshop.gg",
        defaultLocale: "en",
      },
    ],
  },
};

module.exports = nextConfig;
