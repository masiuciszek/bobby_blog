import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { handleFlex } from '../../styled/helpers'
interface Path {
  name: string
  path: string
}
interface Props {
  onItems: Path[]
}

const FooterList: React.FC<Props> = ({ onItems }) => {
  return (
    <ListStyles>
      {onItems.map(({ name, path }) => (
        <li key={path}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ListStyles>
  )
}

const ListStyles = styled.ul`
  ${handleFlex('row', 'center', 'center')};
  padding: 0.5rem;
  li {
    padding: 0.6rem;
  }
  a {
    font-size: ${({ theme }) => theme.size.a};
    color: ${({ theme }) => theme.colors.primary};
    text-transform: capitalize;
    padding: 0.6rem;
    transition: ${props => props.theme.transition.quickTransition};
    &:hover {
      color: ${props => props.theme.colors.white};
      background: ${props => props.theme.colors.secondaryShadow};
      ${({ theme }) => theme.shadow.elevations[1]};
    }
  }
`

export default FooterList
