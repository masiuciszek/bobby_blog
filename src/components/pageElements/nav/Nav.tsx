import * as React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import useToggle from '../../../hooks/useToggle'
import { below } from '../../styled/media'
import MainNavList from './MainNavList'
import SlideNavList from './SlideNavList'
interface Props {}

interface Query {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Nav: React.FC<Props> = () => {
  const { site } = useStaticQuery<Query>(NAV_QUERY)
  const [on, toggle] = useToggle(false)
  return (
    <NavStyles>
      <Title>
        <h3>{site.siteMetadata.title}</h3>
      </Title>
      <MainNavList />
      <SlideNavList />
      <div id="menuLink">
        <span>Menu</span>
      </div>
    </NavStyles>
  )
}

const NavStyles = styled.nav`
  background: ${({ theme }) => theme.colors.white};
  position: relative;
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
  }
`

const NAV_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Nav
