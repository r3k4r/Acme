/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    reactRoot: true,
    serverComponents: true,
    ppr: 'incremental',
  },
};

export default nextConfig;
