import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import { TitleWrapper } from '../nav/Nav'
import { IFixedObject } from 'gatsby-background-image'
import { handleFlex } from '../../styled/helpers'
import FooterList from './FooterList'
import SocialList from './SocialList'
import { below, above } from '../../styled/media'

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
    date: string
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
    <StyledFooter pathname={pathname}>
      <FooterTitleWrapper>
        <h3>
          {' '}
          {site.siteMetadata.title} <small>&#169; {site.date}</small>
        </h3>
      </FooterTitleWrapper>
      <ListsWrapper>
        <FooterList onItems={site.siteMetadata.paths} />
        <SocialList onSocialIcons={icons.edges} />
      </ListsWrapper>
    </StyledFooter>
  )
}

interface StyledFooterProps {
  pathname: string
}

const StyledFooter = styled.footer<StyledFooterProps>`
  ${handleFlex('row', 'space-between', 'center')};
  padding: 1.25rem;
  height: 100%;

  background: ${({
    theme: {
      colors: { white, offWhite },
    },
    pathname,
  }) => (pathname === '/' ? offWhite : white)};
  ${below.medium`
    ${handleFlex('column', 'center', 'center')};
  `}
`

const FooterTitleWrapper = styled(TitleWrapper)`
  width: 60%;
  justify-content: flex-start;
  z-index: 0;
  ${below.medium`
    justify-content: center;
    width: 100%;
  `}
`

const ListsWrapper = styled.div`
  width: 40%;

  ${above.medium`
    ${handleFlex('column', 'center', 'flex-end')};
  `}
`

const FOOTER_QUERY = graphql`
  {
    site {
      date: buildTime(formatString: "YYYY")
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
