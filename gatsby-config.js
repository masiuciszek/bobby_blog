module.exports = {
  siteMetadata: {
    title: `I am Jon`,
    titleTemplate: '%s · Jonkri Master',
    description: `My simple blog about me and what I do`,
    about: `I am a programmer from Gothenburg who has a big passion for functional programing. My strengths and what I really likes the most is Javascript and Haskell`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jonkri-blog`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#343434`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
