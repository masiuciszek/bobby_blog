import * as React from 'react'
import Layout, { Page } from '../components/layout'
import Title from '../components/pageElements/Title'
import Contact from '../components/contact/Contact'

interface Props {}

const ContactPage: React.FC<Props> = () => {
  return (
    <Layout>
      <Page>
        <Title title="Contact me" />
        <Contact />
      </Page>
    </Layout>
  )
}
export default ContactPage
