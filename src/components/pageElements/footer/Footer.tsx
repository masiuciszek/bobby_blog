import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import { TitleWrapper } from '../nav/Nav'

interface Props {}

const Footer: React.FC<Props> = () => {
  const { pathname } = useLocation()
  const x = useStaticQuery(FOOTER_QUERY)
  return (
    <StyledFooter onPath={pathname}>
      <TitleWrapper>
        <h3> Legia CWSKS </h3>
      </TitleWrapper>
    </StyledFooter>
  )
}

interface StyledFooterProps {
  onPath: string
}
const StyledFooter = styled.footer<StyledFooterProps>`
  padding: 1.25rem;
  background: ${({
    theme: {
      colors: { white, offWhite },
    },
    onPath,
  }) => (onPath === '/' ? offWhite : white)};
`

const FOOTER_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        paths {
          name
          path
        }
      }
    }

    allFile(filter: { relativeDirectory: { eq: "social" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Footer
