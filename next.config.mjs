/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // Add rule for SVG files
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
        });

        return config;
    },
    reactStrictMode: true,
};

export default nextConfig;
