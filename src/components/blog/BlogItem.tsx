import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

interface Frontmatter {
  title: string
  tags: string[]
  spoiler: string
  date: string
  slug: string
}
interface Props {
  data: Frontmatter
}

const BlogItem: React.FC<Props> = ({ data }) => {
  return (
    <BlogItemStyles>
      <Link to={`/blog${data.slug}`}>
        <h3>{data.title}</h3>
      </Link>
      <strong>{data.date}</strong>
      <p>{data.spoiler}</p>
    </BlogItemStyles>
  )
}

const BlogItemStyles = styled.li`
  padding: 1rem;
  margin: 0.8rem 0;
  width: 30em;
  text-align: center;
  a {
    text-transform: capitalize;
    color: ${({ theme: { colors } }) => colors.secondary};

    h3 {
      font-size: 4rem;
    }
  }
`

export default BlogItem
