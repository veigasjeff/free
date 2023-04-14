const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  webpack(config, { isServer }) {
    if (!isServer) {
      config.performance = {
        maxAssetSize: 1024 * 1024,
        maxEntrypointSize: 1024 * 1024,
      };
    }

    return config;
  },
});




const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  webpack: (config, options) => {
    config.optimization.minimize = true;
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ];
    return config;
  },
};


module.exports = {
  // Other configuration options...
  minify: true,
};

const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  optimizeImagesInDev: true,
 
  // Other Next.js configurations
})

const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  // ...
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new WebpackObfuscator({
          rotateStringArray: true,
        })
      );
    }

    return config;
  },
  // ...
};


module.exports = {
    async headers() {
      return [
        {
          // Set the Content Security Policy header for all pages
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "frame-ancestors 'self' uwatchfree.vercel.app *.uwatchfree.vercel.app;",
             
            },
          ],
        },
      ];
    },
  };
  

  