import * as React from 'react'
import Layout, { Page } from '../components/layout'
import Title from '../components/pageElements/Title'
import Contact from '../components/contact/Contact'
import styled from 'styled-components'
import { below } from '../components/styled/media'
interface Props {}

const ContactPage: React.FC<Props> = () => {
  return (
    <Layout>
      <Page>
        <Title title="Contact me" />
        <Contact />
        <PushDown />
      </Page>
    </Layout>
  )
}

const PushDown = styled.div`
  height: 20rem;
  ${below.medium`
    height: 1rem;
  `}
`
export default ContactPage
