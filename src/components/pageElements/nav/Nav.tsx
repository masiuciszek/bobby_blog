import * as React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import useToggle from '../../../hooks/useToggle'
import { below } from '../../styled/media'
import MainNavList from './MainNavList'
import SlideNavList from './SlideNavList'
import { useLocation } from '@reach/router'
import { handleFlex } from '../../styled/helpers'
import { IFixedObject } from 'gatsby-background-image'
import Img from 'gatsby-image'
import InfoSlide from './InfoSlide'
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

interface Props {}

const Nav: React.FC<Props> = () => {
  const { site, icons } = useStaticQuery<Query>(NAV_QUERY)
  const [on, toggle] = useToggle(false)
  const [onInfo, toggleInfo] = useToggle(false)
  const { pathname } = useLocation()
  const [a, b] = icons.edges

  return (
    <NavStyles pathName={pathname}>
      <TitleWrapper>
        <Link to="/" id="navTitle">
          <h3>{site.siteMetadata.title}</h3>
        </Link>
        <span onClick={toggleInfo}>
          <Img fixed={b.node.childImageSharp.fixed} alt={b.node.name} />
        </span>
      </TitleWrapper>
      <InfoSlide on={onInfo} />
      <MainNavList onPaths={site.siteMetadata.paths} />
      <SlideNavList onPaths={site.siteMetadata.paths} on={on} />
      <div id="menuLink" onClick={toggle}>
        <Img fixed={a.node.childImageSharp.fixed} alt={a.node.name} />
      </div>
    </NavStyles>
  )
}

interface NavStylesProps {
  pathName: string
}

const NavStyles = styled.nav<NavStylesProps>`
  padding: 1rem;
  height: 90px;
  background: ${({ theme, pathName }) =>
    pathName === '/' ? theme.colors.offWhite : theme.colors.white};
  position: relative;
  ${handleFlex('row', 'space-between', 'center')};
  #menuLink {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 4;
    cursor: pointer;
    display: none;
    ${below.medium`
      display: block;
    `}
  }
`

export const TitleWrapper = styled.div`
  ${handleFlex('row', 'center', 'center')};
  z-index: 5;
  #navTitle,
  h3 {
    font-size: 3rem;
    padding: 0.5rem;
    font-family: 'Bellota', cursive;
    color: ${({ theme: { colors } }) => colors.primary};
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

    icons: allFile(filter: { relativeDirectory: { eq: "nav" } }) {
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
