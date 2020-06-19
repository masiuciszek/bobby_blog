import * as React from 'react'
import { PageProps, graphql, Link } from 'gatsby'
import Layout, { Page } from '../components/layout'
import Title from '../components/pageElements/Title'
import styled from 'styled-components'
import BlogItem from '../components/blog/BlogItem'
import { handleFlex } from '../components/styled/helpers'

type Node = {
  node: {
    id: string
    excerpt: string
    frontmatter: {
      title: string
      tags: string[]
      spoiler: string
      date: string
      slug: string
    }
  }
}
interface MDX {
  edges: Array<Node>
}
interface Props extends PageProps {
  data: {
    allMdx: MDX
  }
  pageContext: {
    currentPage: number
    limit: number
    numPages: number
    skip: number
  }
}

const BlogList: React.FC<Props> = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <Page>
        <Title title="Blog Posts" />
        <BlogListStyles>
          {data.allMdx.edges.map(({ node }) => (
            <BlogItem key={node.id} data={node.frontmatter} />
          ))}
        </BlogListStyles>

        <Pagination>
          {!isFirst && (
            <Link to={`/blog/${prevPage}`} rel="prev" id="prev">
              {' '}
              ← Prev
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li id="middle-link" key={`pagination-number${i + 1}`}>
              <Link
                to={`/blog/${i === 0 ? '' : i + 1}`}
                id={i + 1 !== currentPage ? 'numLink' : ''}
                style={{
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#172C42' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={`/blog/${nextPage}`} rel="next" id="next">
              next →
            </Link>
          )}
        </Pagination>
      </Page>
    </Layout>
  )
}

const BlogListStyles = styled.ul`
  width: 100%;
  padding: 1rem 0.5rem;
  ${handleFlex('column', 'center', 'center')};
`

const Pagination = styled.ul`
  ${handleFlex('row', 'center', 'center')};

  width: 100%;
  padding: 1rem;
  height: 12rem;
  margin: 4rem 0;
  li,
  a {
    color: ${({ theme }) => theme.colors.black};
  }
  li {
    padding: 1rem;
  }
  a {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    width: 5rem;
    display: block;
    border-radius: 0.3em;
    text-align: center;
    text-transform: capitalize;
    font-size: 2rem;
    transition: ${({ theme }) => theme.transition.quickTransition};
  }
  #prev,
  #next {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    width: 12rem;
    display: inline-block;
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.primary};
    }
  }
  #numLink {
    position: relative;
    &:after {
      content: '';
      height: 0.2rem;
      background: ${({ theme }) => theme.colors.primary};
      width: 0;
      padding: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: ${({ theme }) => theme.transition.secondaryTransition};
    }
    &:hover {
      &:after {
        width: 100%;
        padding: 0.2rem;
      }
    }
  }
`

export const PAGE_QUERY = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
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

export default BlogList
