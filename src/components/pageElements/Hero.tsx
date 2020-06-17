import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage, { IFluidObject } from 'gatsby-background-image'
import { handleFlex } from '../styled/helpers'
import { below } from '../styled/media'
interface Props {
  className: string
  children: React.ReactNode
  img?: IFluidObject
  large?: boolean
}

interface Query {
  hero: {
    childImageSharp: {
      fluid: IFluidObject
    }
  }
}

const Hero: React.FC<Props> = ({ className, children, img, large }) => {
  const { hero } = useStaticQuery<Query>(HERO_QUERY)

  return (
    <BackgroundImage
      className={className}
      fluid={img || hero.childImageSharp.fluid}
      large={large}
    >
      {children}
    </BackgroundImage>
  )
}

const HERO_QUERY = graphql`
  {
    hero: file(relativePath: { eq: "paint.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default styled(Hero)`
  ${handleFlex('column', 'center', 'center')};
  /* min-height: ${props => (props.large ? `calc(100vh - 92px)` : `50vh`)}; */
  min-height: ${props => (props.large ? `100vh` : `50vh`)};
  background-position: bottom center;
  background-size: cover;
  /* opacity: 1 !important; */

`
