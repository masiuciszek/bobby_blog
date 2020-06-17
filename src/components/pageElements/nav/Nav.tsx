import * as React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import useToggle from '../../../hooks/useToggle'
import { below } from '../../styled/media'
import MainNavList from './MainNavList'
import SlideNavList from './SlideNavList'
import { useLocation } from '@reach/router'
import { handleFlex } from '../../styled/helpers'
import { IFixedObject } from 'gatsby-background-image'
import Img from 'gatsby-image'
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
interface Query {
  site: {
    siteMetadata: {
      title: string
      paths: Path[]
    }
  }
  icons: {
    edges: Array<IconNode>
  }
}

const Nav: React.FC = () => {
  const { site, icons } = useStaticQuery<Query>(NAV_QUERY)
  const [on, toggle] = useToggle(false)
  const { pathname } = useLocation()
  const [a, b] = icons.edges

  return (
    <NavStyles pathName={pathname}>
      <TitleWrapper>
        <h3>{site.siteMetadata.title}</h3>
        <Img fixed={a.node.childImageSharp.fixed} alt={a.node.name} />
      </TitleWrapper>
      <MainNavList onPaths={site.siteMetadata.paths} />
      <SlideNavList onPaths={site.siteMetadata.paths} on={on} />
      <div id="menuLink" onClick={toggle}>
        <Img fixed={b.node.childImageSharp.fixed} alt={b.node.name} />
      </div>
    </NavStyles>
  )
}

interface NavStylesProps {
  pathName: string
}

const NavStyles = styled.nav<NavStylesProps>`
  padding: 1rem;
  background: ${({ theme, pathName }) =>
    pathName === '/' ? theme.colors.offWhite : theme.colors.white};
  position: relative;
  ${handleFlex('row', 'space-between', 'center')};
  #menuLink {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 2;
    cursor: pointer;
    display: none;
    ${below.medium`
      display: block;
    `}
  }
`

export const TitleWrapper = styled.div`
  ${handleFlex('row', 'center', 'center')};
  z-index: 3;
  h3 {
    font-size: 3rem;
    padding: 0.5rem;
    font-family: 'Bellota', cursive;
  }
  img,
  h3 {
    cursor: pointer;
  }
`

const NAV_QUERY = graphql`
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
    icons: allFile(
      limit: 2
      filter: { extension: { eq: "png" } }
      sort: { fields: [name], order: DESC }
    ) {
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

export default Nav
