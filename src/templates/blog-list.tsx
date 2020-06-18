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
  console.log(currentPage + 1)

  return (
    <Layout>
      <Page>
        <Title title="Blog Posts" color="#031326" />
        <BlogListStyles>
          {data.allMdx.edges.map(({ node }) => (
            <BlogItem key={node.id} data={node.frontmatter} />
          ))}
        </BlogListStyles>

        <Pagination>
          {!isFirst && (
            <Link to={`/blog/${prevPage}`} rel="prev" id="prev">
              {' '}
              Prev{' '}
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li id="middle-link" key={`pagination-number${i + 1}`}>
              <Link
                to={`/blog/${i === 0 ? '' : i + 1}`}
                style={{
                  margin: 5,
                  padding: 5,
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#2c73d2' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={`/blog/${nextPage}`} rel="next" id="next">
              next
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

const Pagination = styled.div`
  ${handleFlex('row', 'center', 'center')};
  background: #333;
  border: 2px solid red;
  width: 100%;
  padding: 1rem;
  height: 12rem;
  li,
  a {
    color: #fff;
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
