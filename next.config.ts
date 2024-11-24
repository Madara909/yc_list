import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        dangerouslyAllowSVG: true,
        domains: ["placehold.co"], // Add external image domains here
    },
};

export default nextConfig;
