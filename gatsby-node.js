const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogListTemplate = path.resolve('src/templates/blog-list.tsx')
  const blogPostTemplate = path.resolve('src/templates/blog-post.tsx')
  // const tagPostTemplate = path.resolve('src/templates/tag-post.tsx')

  const result = await graphql(
    `
      {
        allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
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
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMdx.edges

  const postPerPage = 2
  const numPages = Math.ceil(posts.length / postPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
