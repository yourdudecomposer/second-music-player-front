/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    webpack: (config) => {
        // Add rule for SVG files
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
        });

        return config;
    },
    reactStrictMode: false,
};

export default nextConfig;
