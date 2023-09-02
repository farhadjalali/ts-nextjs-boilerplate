/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
