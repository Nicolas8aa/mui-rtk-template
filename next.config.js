const nextConfig = {
  /* Your Next.js configuration options go here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@mui/material/css"],
  // ! Not working on Next.js 13
  // modularizeImports: {
  //   "@mui/material": {
  //     transform: "@mui/material/{{member}}",
  //   },
  //   "@mui/icons-material": {
  //     transform: "@mui/icons-material/{{member}}",
  //   },
  //   "@mui/styles": {
  //     transform: "@mui/styles/{{member}}",
  //   },
  // },
};

module.exports = nextConfig;
