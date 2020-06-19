import * as React from 'react'
import styled from 'styled-components'

interface Props {
  className: string
}

const ContactForm: React.FC<Props> = ({ className }) => {
  return (
    <div>
      {' '}
      <h1> Legia CWSKS </h1>{' '}
    </div>
  )
}

export default styled(ContactForm)``
