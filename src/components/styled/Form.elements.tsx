import styled from 'styled-components'
import { handleFlex } from './helpers'

export const Label = styled.label`
  ${handleFlex('column', 'center', 'center')};
  padding: 2rem 1rem;
  width: 90%;
  transition: ${props => props.theme.transition.quickTransition};
  span {
    display: block;
    margin-right: auto;
    color: ${({ theme: { colors } }) => colors.primary};
    font-weight: 700;
    font-size: 1.8rem;
  }
`

export const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  border: 0;
  padding: 0.6rem 0.8rem;
  transition: ${props => props.theme.transition.quickTransition};
  outline: 0;
  border-radius: 0.2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  &:focus {
    width: 90%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

export const TextArea = styled.textarea`
  border-radius: 0.2rem;
  border: 0;
  outline: 0;
  width: 100%;
  height: 12rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  transition: ${props => props.theme.transition.quickTransition};
  &:focus {
    width: 90%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`
