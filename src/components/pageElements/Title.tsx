import * as React from 'react'
import styled from 'styled-components'
import { LinkStyled } from '../styled/Btn'

interface Props {
  title: string
  subTitle?: string
  color?: string
  bg?: string
  cta?: boolean
  xl?: boolean
  ctaText?: string
  ctaPath?: string
}

interface StyledTitleProps {
  titleProps: {
    color?: string
    bg?: string
    cta?: boolean
    ctaText?: string
    ctaPath?: string
    xl?: boolean
  }
}

const StyledTitle = styled.div<StyledTitleProps>`
  color: ${({ theme, titleProps: { color } }) =>
    color ? color : theme.colors.primary};
  background: ${({ titleProps: { bg } }) => bg && bg};
  padding: 1.5rem 2.6rem;
  width: 64em;
  text-align: center;
  h1 {
    font-size: ${({ titleProps: { xl } }) => (xl ? '8rem' : '5rem')};
  }
  h3 {
    font-size: ${({ titleProps: { xl } }) => (xl ? '6rem' : '4rem')};
  }
  h1,
  h3 {
    text-shadow: ${({ theme: { colors }, titleProps: { color } }) =>
      color && `3px 2px 3px ${colors.offWhite}`};
  }
`

const Title: React.FC<Props> = ({
  title,
  subTitle,
  color,
  bg,
  cta,
  ctaPath,
  ctaText,
  xl,
}) => {
  return (
    <StyledTitle titleProps={{ color, bg, cta, ctaPath, ctaText, xl }}>
      <h1>{title}</h1>
      {subTitle && <h3>{subTitle}</h3>}
      {cta && (
        <LinkStyled to={`${ctaPath ? ctaPath : '/blog'}`}>
          {ctaText ? ctaText : 'Blog'}
        </LinkStyled>
      )}
    </StyledTitle>
  )
}
export default Title
