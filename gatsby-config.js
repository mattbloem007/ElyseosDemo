require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Elyseos`,
    titleTemplate: '%s · Elyseos',
    description: `Elyseos.`,
    author: `Sy Tzu`,
    url: 'https://www.elyseos.com',
    siteUrl: 'https://www.elyseos.com',
    image: '/images/logo-watermark.png',
    owner: 'Elyseos Team',
    twitterUsername: '@ElyseosFDN',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.elyseos.com',
        sitemap: 'https://www.elyseos.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
    resolve: `gatsby-source-youtube-v3`,
    options: {
      channelId: ['UCnqCcdQLZQUzG4CDvbw9jhA', 'UC4Ii0yM2sD5N05BAPnXzdSQ'],
      apiKey: process.env.YOUTUBEAPI,
      maxVideos: 50 // Defaults to 50
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/common/layout/layout.js`),
      },
    },
 {
     resolve: `gatsby-plugin-plausible`,
     options: {
       domain: `elyseos.com`,
     },
   },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `product`,
        path: `${__dirname}/src/images/product`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
        host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com'
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#231B17`,
        theme_color: `#231B17`,
        display: `minimal-ui`,
        icon: `src/images/Elyseos Logo.png`,
      },
    },
    {
       resolve: `gatsby-source-graphql`,

       options: {
         // This type will contain remote schema Query type
         typeName: `WPGraphQL`,
         // This is field under which it's accessible
         fieldName: `wpgraphql`,
         // Url to query from
         url: `http://blog.elyseos.com/graphql`,
      //  url: `http://alchemy-of-remembrance.local/graphql`
       },
     },
     //{
    //   resolve: 'gatsby-wpgraphql-inline-images',
    //   options: {
    //     wordPressUrl: 'http://blog.elyseos.com/',
    //     uploadsUrl: 'http://blog.elyseos.com/wp-content/uploads/',
    //     processPostTypes: ['Page', 'Post', 'CustomPost'],
    //     graphqlTypeName: 'WPGraphQL',
    //     // httpHeaders: {
    //     //   Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    //     // }
    //   },
    // },
    {
    resolve: 'gatsby-source-wpgraphql-images',
    options: {
      wordPressUrl: 'http://blog.elyseos.com/',
      uploadsUrl: 'http://blog.elyseos.com/wp-content/uploads/',
      processPostTypes: ['Page', 'Post', 'CustomPost'],
      graphqlTypeName: 'WPGraphQL',
    },
  },
  {
    resolve: `gatsby-source-wordpress`,
    options: {
      url: `http://blog.elyseos.com/graphql`,
      protocol: `http`,
      schema: {
        perPage: 20, // currently set to 100
        requestConcurrency: 5, // currently set to 15
        previewRequestConcurrency: 2, // currently set to 5
      }
      // plugins: [
      //     {
      //       resolve: `gatsby-wordpress-inline-images`,
      //       options: {
      //         url: `blog.elyseos.com`,
      //         protocol: `http`
      //       }
      //     },
      //   ]
      }
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
