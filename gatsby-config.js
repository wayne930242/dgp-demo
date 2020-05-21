module.exports = {
  siteMetadata: {
    title: `DGP Taiwan`,
    description: `SAFETY - QUALITY – EFFICIENCY`,
    author: `DGP Taiwan`,
  },
  pathPrefix: "/dgp-demo",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
//        background_color: `#663399`,
//        theme_color: `#663399`,
//        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans TC\:300,500`,
          `Noto Serif TC\:300,700`
        ],
        display: 'swap'
      }
    }
  ]
}