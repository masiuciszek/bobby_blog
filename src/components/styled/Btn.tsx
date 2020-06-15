import { Link } from 'gatsby'
import styled from 'styled-components'

export const LinkStyled = styled(Link)`
  padding: 0.6rem 1rem;
  font-size: 1.8rem;
  display: block;
  margin: 1rem auto;
  transition: ${props => props.theme.transition.mainTransition};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  width: 14rem;
  font-weight: 600;
  &:hover {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.secondaryShadow};
    border: 2px solid ${props => props.theme.colors.white};
    width: 12.6rem;
  }
  &:active {
    position: relative;
    top: 0.6rem;
  }
`
