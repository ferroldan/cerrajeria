/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Deshabilitar trace para evitar problemas de permisos en Windows
  experimental: {
    instrumentationHook: false,
  },
};

export default nextConfig;

