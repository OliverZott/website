/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        root: process.cwd()
    },
    // remove with ts7.1 or later
    experimental: {
        useTypeScriptCli: true,
    }
};

export default nextConfig;