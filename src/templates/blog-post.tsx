import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
interface FrontMatter {
  title: string
  date: string
  tags: string[]
  slug: string
  spoiler: string
}

interface Mdx {
  frontmatter: FrontMatter
  body: string
}

interface Props extends PageProps {
  data: {
    mdx: Mdx
  }
  pageContext: {
    postSlug: string
  }
}

const BlogPostTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const {
    mdx: {
      frontmatter: { title },
    },
  } = data
  return (
    <div>
      <h1> {title} </h1>
      <div className="apa">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </div>
  )
}

export const PAGE_QUERY = graphql`
  query($postSlug: String!) {
    mdx(frontmatter: { slug: { eq: $postSlug } }) {
      frontmatter {
        title
        date
        tags
        slug
        spoiler
      }
      body
    }
  }
`

export default BlogPostTemplate
