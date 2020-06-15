import React from 'react'
import { Link } from 'gatsby'
import Layout, { Page } from '../components/layout'
import Hero from '../components/pageElements/Hero'
import Title from '../components/pageElements/Title'

const IndexPage = () => (
  <Layout>
    <Hero className="Home" large>
      <Title title="Hello" subTitle="I am Jon" bg="rgba(0,0,0,0.6)" cta />
    </Hero>
  </Layout>
)

export default IndexPage
