import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { handleFlex } from '../../styled/helpers'
import { below } from '../../styled/media'
interface Path {
  name: string
  path: string
}
interface Props {
  onPaths: Array<Path>
}

const MainNavList: React.FC<Props> = ({ onPaths }) => {
  return (
    <NavList>
      {onPaths.map(({ name, path }) => (
        <li key={path}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </NavList>
  )
}

const NavList = styled.ul`
  ${handleFlex('row', 'center', 'center')};
  padding: 1rem;
  li {
    padding: 1rem;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-transform: capitalize;
    padding: 0.5rem 0.8rem;
    transition: ${props => props.theme.transition.quickTransition};
    &:hover {
      color: ${props => props.theme.colors.white};
      background: ${props => props.theme.colors.secondaryShadow};
      ${({ theme }) => theme.shadow.elevations[1]};
    }
  }
  ${below.medium`
    display: none;
  `}
`

export default MainNavList
