import React from 'react'
import Layout, { Page } from '../components/layout'
import Hero from '../components/pageElements/Hero'
import Title from '../components/pageElements/Title'

const IndexPage = () => (
  <Layout>
    <Hero className="Home" large>
      <Title xl title="Hello" subTitle="I am Jon" bg="rgba(0,0,0,0.4)" cta />
    </Hero>
  </Layout>
)

export default IndexPage
