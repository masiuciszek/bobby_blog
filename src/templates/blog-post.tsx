import * as React from 'react'
import { PageProps, graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import Layout, { Page } from '../components/layout'
import { handleFlex } from '../components/styled/helpers'
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

interface PrevNextData {
  id: string
  excerpt: string
  body: string
  frontmatter: FrontMatter
}
interface PageContext {
  postSlug: string
  prev: PrevNextData
  next: PrevNextData
}

interface Props extends PageProps {
  data: {
    mdx: Mdx
  }
  pageContext: PageContext
}

const BlogPostTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const { prev, next } = pageContext
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
        <NavigationWrapper>
          {prev && (
            <Link to={`/blog${prev.frontmatter.slug}`}>
              ← {prev.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={`/blog${next.frontmatter.slug}`}>
              {next.frontmatter.title} →
            </Link>
          )}
        </NavigationWrapper>
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

const NavigationWrapper = styled.div`
  ${handleFlex('row', 'space-around', 'center')};
  width: 100%;
  a {
    color: ${({ theme }) => theme.colors.primary};
    padding: 1rem;
    font-size: 2.3rem;
    transition: ${({ theme }) => theme.transition.quickTransition};
    &:hover {
      color: ${({ theme }) => theme.colors.offWhite};
      text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.primary};
    }
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
