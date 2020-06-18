import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import Layout, { Page } from '../components/layout'
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
      frontmatter: { title, date, spoiler },
    },
  } = data
  return (
    <Layout>
      <BlogStyles as="section">
        <BlogHead>
          <h1 id="blogTitle"> {title} </h1>
          <strong>{spoiler}</strong>
          <strong>{date}</strong>
        </BlogHead>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </BlogStyles>
    </Layout>
  )
}

const BlogStyles = styled(Page)`
  max-width: 900px;
  p {
    font-size: 18px;
    margin: 2rem 0;
  }
`

const BlogHead = styled.div`
  margin-right: auto;
  padding: 2rem 0;
  width: 100%;
  #blogTitle {
    margin-right: auto;
  }
  strong {
    display: block;
  }
`

export const PAGE_QUERY = graphql`
  query($postSlug: String!) {
    mdx(frontmatter: { slug: { eq: $postSlug } }) {
      frontmatter {
        title
        date(formatString: "dddd, MMMM Do YYYY")
        tags
        slug
        spoiler
      }
      body
    }
  }
`

export default BlogPostTemplate
