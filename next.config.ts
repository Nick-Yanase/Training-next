import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.unsplash.com' //se colocar * * vc libera pra todos os dominos da net
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
