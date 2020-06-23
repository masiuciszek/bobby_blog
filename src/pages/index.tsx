import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/pageElements/Hero'
import Title from '../components/pageElements/Title'

const IndexPage = () => (
  <Layout>
    <Hero className="Home" large>
      <Title xl title="Hello" subTitle="I am Bobby" cta />
    </Hero>
  </Layout>
)

export default IndexPage
