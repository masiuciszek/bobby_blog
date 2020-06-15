import * as React from 'react'
import styled from 'styled-components'
import { LinkStyled } from '../styled/Btn'

interface Props {
  title: string
  subTitle?: string
  color?: string
  bg?: string
  cta?: boolean
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
  }
}

const StyledTitle = styled.div<StyledTitleProps>`
  color: ${({ theme, titleProps: { color } }) =>
    color ? color : theme.colors.white};
  background: ${({ titleProps: { bg } }) => bg && bg};
  padding: 1rem 2rem;
  width: 44em;
  text-align: center;
`

const Title: React.FC<Props> = ({
  title,
  subTitle,
  color,
  bg,
  cta,
  ctaPath,
  ctaText,
}) => {
  return (
    <StyledTitle titleProps={{ color, bg, cta, ctaPath, ctaText }}>
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
