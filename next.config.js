/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
      },

      {
        protocol: "http",
        hostname: "0.gravatar.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "1.gravatar.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "2.gravatar.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "secure.gravatar.com",
        port: "",
      },
    ],
  },
};
