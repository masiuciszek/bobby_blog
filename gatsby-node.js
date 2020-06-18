const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogListTemplate = path.resolve('src/templates/blog-list.tsx')
  const blogPostTemplate = path.resolve('src/templates/blog-post.tsx')
  // const tagPostTemplate = path.resolve('src/templates/tag-post.tsx')

  const result = await graphql(
    `
      {
        allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
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
              excerpt
              body
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
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })
}
