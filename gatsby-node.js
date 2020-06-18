const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogListTemplate = path.resolve('src/templates/blog-list.tsx')
  const blogPostTemplate = path.resolve('src/templates/blog-post.tsx')
  // const tagPostTemplate = path.resolve('src/templates/tag-post.tsx')

  const result = await graphql(
    `
      {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                title
                tags
                spoiler
                date(formatString: "dddd, MMMM Do YYYY")
                slug
              }
            }
          }
        }
      }
    `
  )

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    const { slug } = node.frontmatter

    createPage({
      path: `/blog${slug}`,
      component: blogPostTemplate,
      context: {
        postSlug: slug,
      },
    })
  })
}
