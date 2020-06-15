import * as React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import useToggle from '../../../hooks/useToggle'
import { below } from '../../styled/media'
import MainNavList from './MainNavList'
import SlideNavList from './SlideNavList'
import { useLocation } from '@reach/router'
import { handleFlex } from '../../styled/helpers'

interface Path {
  name: string
  path: string
}

interface Query {
  site: {
    siteMetadata: {
      title: string
      paths: Path[]
    }
  }
}

const Nav: React.FC = () => {
  const { site } = useStaticQuery<Query>(NAV_QUERY)
  const [on, toggle] = useToggle(false)
  const { pathname } = useLocation()

  return (
    <NavStyles pathName={pathname}>
      <Title>
        <h3>{site.siteMetadata.title}</h3>
      </Title>
      <MainNavList onPaths={site.siteMetadata.paths} />
      {/* <SlideNavList onPaths={site.siteMetadata.paths} /> */}
      <div id="menuLink" onClick={toggle}>
        <span>Menu</span>
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
    cursor: pointer;
    display: none;
    ${below.medium`
      display: block;
    `}
  }
`

const Title = styled.div`
  h3 {
    font-size: 3rem;
    cursor: pointer;
    padding: 0.5rem;
    font-family: 'Bellota', cursive;
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
  }
`

export default Nav
