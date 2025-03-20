// next.config.mjs
import createMDX from '@next/mdx';

// Configure the MDX plugin with simplified options
const withMDX = createMDX({
  extension: /\.mdx?$/,
  // Simplified options to avoid serialization issues
  options: {
    // Removed complex plugin configurations
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure file extensions for pages
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // Image configuration
  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'github.com',
    ],
  },
  
  // Simplified experimental features
  experimental: {
    // Disabled mdxRs as it's causing serialization issues
    // mdxRs: true,
    
    // Keep this for large datasets
    largePageDataBytes: 800 * 1024,
  },
  
  // Other config options
  reactStrictMode: true,
  
  // Custom webpack config if needed
  webpack: (config) => {
    // You can add webpack customization here if needed
    return config;
  },
};

// Apply the MDX configuration
export default withMDX(nextConfig);