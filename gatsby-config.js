module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-77Q4WQ08WV",
        ],
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `farazamiruddin`,
    author: `faraz ahmad`,
    description: `a scrappy software engineer based in nyc.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/farazamiruddin`,
      },
      {
        name: `github`,
        url: `https://github.com/faahmad`,
      },
      {
        name: `dev.to`,
        url: `https://dev.to/farazamiruddin`
      }
    ],
  },
}
