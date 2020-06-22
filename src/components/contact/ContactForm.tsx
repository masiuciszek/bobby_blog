import * as React from 'react'
import styled from 'styled-components'
import { Label, Input, TextArea } from '../styled/Form.elements'
import { handleFlex } from '../styled/helpers'
import { Btn } from '../styled/Btn'
import { below } from '../styled/media'

interface Props {
  className: string
}

const ContactForm: React.FC<Props> = ({ className }) => {
  return (
    <form className={className}>
      <Label>
        <span>Name</span>
        <Input type="text" name="name" />
      </Label>
      <Label>
        <span>Email</span>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <span>Message</span>
        <TextArea name="text" />
      </Label>
      <Btn as="button" type="submit">
        Submit
      </Btn>
    </form>
  )
}

export default styled(ContactForm)`
  ${handleFlex('column', 'center', 'center')};
  padding: 2rem 1rem;
  width: 60%;
  ${below.medium`
    width: 80%;
  `}
`
