module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: '/api',
          destination: 'https://oss.go.id/portal/home/trackingNIB',
        },
      ],
    }
  },
}
