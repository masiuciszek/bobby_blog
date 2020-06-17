import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import { TitleWrapper } from '../nav/Nav'
import { IFixedObject } from 'gatsby-background-image'
import Img from 'gatsby-image'
import { handleFlex } from '../../styled/helpers'

interface Path {
  name: string
  path: string
}

interface IconNode {
  node: {
    name: string
    childImageSharp: {
      fixed: IFixedObject
    }
  }
}
interface FooterQuery {
  site: {
    siteMetadata: {
      title: string
      paths: Path[]
    }
  }
  icons: {
    edges: IconNode[]
  }
}

interface Props {}

const Footer: React.FC<Props> = () => {
  const { pathname } = useLocation()
  const { site, icons } = useStaticQuery<FooterQuery>(FOOTER_QUERY)

  return (
    <StyledFooter onPath={pathname}>
      <TitleWrapper>
        <h3> {site.siteMetadata.title} </h3>
      </TitleWrapper>
    </StyledFooter>
  )
}

interface StyledFooterProps {
  onPath: string
}

const StyledFooter = styled.footer<StyledFooterProps>`
  ${handleFlex('row', 'space-between', 'center')};
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

    icons: allFile(filter: { relativeDirectory: { eq: "social" } }) {
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
