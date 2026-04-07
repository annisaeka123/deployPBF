/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.adidas.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.static-src.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d2kchovjbwl1tk.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig