/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config, { isServer }) => {
    if (config) {
      if (!isServer) {
        config.resolve.alias['~slick-carousel'] = 'slick-carousel/slick';
      }
    }
    return config;
  },
};

module.exports = nextConfig;