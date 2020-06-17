module.exports = {
  siteMetadata: {
    title: `I am Jon`,
    titleTemplate: '%s · Jonkri Master',
    description: `My simple blog about me and what I do`,
    about: `I am a programmer from Gothenburg whoa has a big passion for functional programing. My strengths and what I really likes the most is Javascript and Haskell`,
    author: `@marcellCiszek`,
    twitterUsername: '@masiuciszek',
    image: '/images/icon.png',
    siteUrl: 'https://marcelable.com',
    paths: [
      {
        name: 'about',
        path: '/about',
      },
      {
        name: 'blog',
        path: '/blog',
      },
      {
        name: 'contact',
        path: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
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
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
