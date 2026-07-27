import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
    No `images.remotePatterns` on purpose: every image on this site is a local
    file under `public/`, so `next/image` should refuse anything remote. Adding a
    remote host here would make the site's rendering depend on another server
    staying up and another party's licence staying valid.

    Nothing else needs configuring — there are no redirects, rewrites, custom
    headers, environment variables, or experimental flags in use.
  */
};

export default nextConfig;
