import * as React from 'react'
import { IFixedObject } from 'gatsby-background-image'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { handleFlex, handleHref } from '../../styled/helpers'
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

interface Props {
  onSocialIcons: IconNode[]
}

const SocialList: React.FC<Props> = ({ onSocialIcons }) => {
  return (
    <SocialStyles>
      {onSocialIcons.map(x => (
        <li key={x.node.name}>
          <a href={handleHref(x.node.name)} target="_blank" rel="noreferrer">
            <Img fixed={x.node.childImageSharp.fixed} alt={x.node.name} />
          </a>
        </li>
      ))}
    </SocialStyles>
  )
}

const SocialStyles = styled.ul`
  ${handleFlex('row', 'center', 'center')};
  li {
    padding: 0.5rem 1rem;
  }
`

export default SocialList
