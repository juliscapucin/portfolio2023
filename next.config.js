/** @type {import('next').NextConfig} */
const nextConfig = {
   env: {
      storyblokApiKey: 'MHr8pmVwfFCDOOCemTyGpgtt',
   },
   images: {
      remotePatterns: [
         { protocol: 'https', hostname: 'cdn.sanity.io', port: '' },
      ],
   },
};

module.exports = nextConfig;
