const path = require(`path`)
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`)

const { get } = require('lodash')

const getImagesFromRichText = edge =>
  get(edge, 'node.body.json.content', []).reduce((acc, c) => {
    const url = get(c, 'data.target.fields.file.en.url')
    if (c.nodeType == 'embedded-asset-block' && url) {
      return [...acc, url]
    }
    return acc
  }, [])


  exports.createResolvers = async (
    {
      actions,
      cache,
      createNodeId,
      createResolvers,
      store,
      reporter,
    },
  ) => {
    const { createNode } = actions

    await createResolvers({
      WPGraphQL_MediaItem: {
        imageFile: {
          type: "File",
          async resolve(source) {
            let sourceUrl = source.sourceUrl

            if (source.mediaItemUrl !== undefined) {
              sourceUrl = source.mediaItemUrl
            }

            return await createRemoteFileNode({
              url: encodeURI(sourceUrl),
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            })
          },
        },
      },
    })
  }

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-particle-animation/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// wpgraphql {
// posts (first: 10000) {
//   edges {
//     node {
//       id
//       slug
//       featuredImage{
//         sourceUrl
//       }
//       categories {
//         edges {
//           node {
//             name
//           }
//         }
//       }
//
//     }
//   }
// }
//
// pages {
//   edges {
//     node {
//       id
//       slug
//     }
//   }
// }
// }

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions


   createRedirect({
     fromPath: '/',
     toPath: '/home(1)',
     isPermanent: true,
     redirectInBrowser: true,
  })

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const eventPageTemplate = path.resolve(`./src/templates/eventsPage.js`)
  //const roadmapTemplate = path.resolve(`./src/templates/roadmap.js`)
  const featurePageTemplate = path.resolve(`./src/templates/featurePage.js`)
  const faqPageTemplate = path.resolve(`./src/templates/faq.js`)

  return graphql(
    `
      {
        allWpPost {
         nodes {
           id
           uri
           slug
         }
       }

        allContentfulBlogPost(filter: {sys: {revision: {eq: null}}}) {
          edges {
            node {
              id
              featuredImage {
                file {
                  url
                }
              }
              excerpt {
                childMarkdownRemark {
                  html
                }
              }
              postTitle
              postBody {
                raw
              }
              slug
            }
          }
        }
        allContentfulPage(filter: {sys: {revision: {eq: null}}}) {
          edges {
            node {
              featureText1 {
                raw
              }
              id
              subtitle
              title
              slug
            }
          }
        }
        allContentfulEventsPage(filter: {sys: {revision: {eq: null}}}) {
          edges {
            node {
              featureText1 {
                raw
              }
              id
              subtitle
              title
              slug
            }
          }
        }
        allContentfulRoadmap(filter: {sys: {revision: {eq: null}}}) {
            edges {
              node {
                slogan
                slug
                timelineNodes {
                  title
                  description
                }
                title
                colour
              }
            }
          }
          allContentfulFeaturePage(filter: {sys: {revision: {lte: 1}}}) {
           edges {
             node {
               title
               subtitle
               slug
               slogan
               featureText1 {
                 raw
               }
               contentItems {
                 body {
                   raw
                 }
                 title
                 sacramentIcon {
                   file {
                     url
                   }
                 }
               }
             }
           }
         }

         allContentfulFaqPage(filter: {sys: {revision: {eq: null}}}) {
          edges {
            node {
              subtitle
              title
              slug
              featureItem {
                title
                answer {
                  raw
                }
              }
            }
          }
        }


      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulBlogPost.edges
    const pages = result.data.allContentfulPage.edges
  //  const roadmaps = result.data.allContentfulRoadmap.edges
    const featurePages = result.data.allContentfulFeaturePage.edges
    const faqPages = result.data.allContentfulFaqPage.edges
  //  const blogPosts = result.data.wpgraphql.posts.edges;
    //const allPages = result.data.wpgraphql.pages.edges;
    const eventsPages = result.data.allContentfulEventsPage.edges
    const all = result.data.allWpPost.nodes
    console.log("ALLL", all)

    all.map(node => {
      console.log("NODE", node)
        createPage({
            path: node.slug,
            component: blogPost,
            context: {
                id: node.id,
            }
        });
    })

    // blogPosts.forEach(({ node }) => {
    //     createPage({
    //         path: node.slug,
    //         component: blogPost,
    //         context: {
    //             id: node.id,
    //             slug: node.slug,
    //             featuredImage: node.featuredImage,
    //         }
    //     });
    // });
    //
    //
    pages.forEach((page, index) => {
      let tag = page.node.slug;

      createPage({
        path: tag,
        component: pageTemplate,
        context: {
          slug: tag,
        },
      })
    })

    eventsPages.forEach((page, index) => {
      let tag = page.node.slug;
      if (page.node.slug == null) {
        tag = page.node.id
      }


      createPage({
        path: tag,
        component: eventPageTemplate,
        context: {
          id: page.node.id,
          slug: tag,
        },
      })
    })

    // roadmaps.forEach((roadmap, index) => {
    //
    //   createPage({
    //     path: roadmap.node.slug,
    //     component: roadmapTemplate,
    //     context: {
    //       title: roadmap.node.title,
    //     },
    //   })
    // })

    featurePages.forEach((fPage, index) => {
      const images = getImagesFromRichText(fPage)

      createPage({
        path: fPage.node.slug,
        component: featurePageTemplate,
        context: {
          images,
          slug: fPage.node.slug,
        },
      })
    })

    faqPages.forEach((fPage, index) => {

      createPage({
        path: fPage.node.slug,
        component: faqPageTemplate,
        context: {
          slug: fPage.node.slug,
        },
      })
    })

    return null
  })
}
