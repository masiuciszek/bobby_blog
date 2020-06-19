import * as React from 'react'
import styled from 'styled-components'
import SocialMedia from './SocialMedia'
import ContactForm from './ContactForm'
import { handleFlex } from '../styled/helpers'
import { below } from '../styled/media'

interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <ContactStyles>
      <SocialMedia />
      <ContactForm className="ConcatForm" />
    </ContactStyles>
  )
}

const ContactStyles = styled.div`
  width: 100%;
  height: 100%;
  ${handleFlex('row', 'center', 'center')};
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 15px;
  grid-template-rows: auto; */
  ${below.medium`
  ${handleFlex('column-reverse', 'center', 'center')};

  `}
`

export default Contact
