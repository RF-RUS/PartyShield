/** @type {import('next').NextConfig} */
// NOTE: This site is built as a fully static export (`output: 'export'`).
// The Next.js `headers()` config is NOT applied to static exports, so security
// headers (X-Frame-Options, Strict-Transport-Security, Permissions-Policy, etc.)
// MUST be configured at the hosting layer instead — for example via `.htaccess`
// (Apache), the Nginx server block, or Vercel's `vercel.json` `headers` field.
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
