import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow access from local network devices during development
  allowedDevOrigins: ["192.168.178.78"],
};

export default nextConfig;
