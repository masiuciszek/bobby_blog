import * as React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { graphql, useStaticQuery } from 'gatsby'
import { IFixedObject } from 'gatsby-background-image'
import Img from 'gatsby-image'
import { handleFlex, handleHref } from '../styled/helpers'
import { below } from '../styled/media'
interface Node {
  node: {
    id: string
    name: string
    childImageSharp: {
      fixed: IFixedObject
    }
  }
}

interface Query {
  icons: {
    edges: Node[]
  }
}

const SocialMedia: React.FC = () => {
  const {
    icons: { edges },
  } = useStaticQuery<Query>(SOCIAL_QUERY)

  return (
    <StyledSocialMedia>
      {edges.map(({ node }) => (
        <li key={node.id}>
          <a href={handleHref(node.name)} target="_blank" rel="noreferrer">
            <Img fixed={node.childImageSharp.fixed} alt={node.name} />
          </a>
          {node.name}
        </li>
      ))}
    </StyledSocialMedia>
  )
}

const StyledSocialMedia = styled(animated.ul)`
  padding: 1rem 3rem;
  width: 40%;
  li {
    padding: 2rem 1rem;
    ${handleFlex('row', 'center', 'center')};
    color: ${props => props.theme.colors.primary};
    font-size: 2rem;
    text-transform: capitalize;

    a {
      display: block;
      width: 70%;
      margin-right: auto;
    }
  }
  ${below.medium`
    width: 60%;
  `}
`

const SOCIAL_QUERY = graphql`
  {
    icons: allFile(filter: { relativeDirectory: { eq: "social" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            fixed(width: 55, height: 55) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default SocialMedia
