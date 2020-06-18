import React from 'react'
import Layout, { Page } from '../components/layout'
import Hero from '../components/pageElements/Hero'
import Title from '../components/pageElements/Title'
import styled from 'styled-components'
import { below } from '../components/styled/media'
import { handleFlex } from '../components/styled/helpers'

const IndexPage = () => (
  <Layout>
    <Hero className="Home" large>
      <Title xl title="Hello" subTitle="I am Jon" cta color="#031326" />
    </Hero>

    {/* <div style={{ height: '150px' }} /> */}
  </Layout>
)

const TestWrapper = styled.div`
  min-height: 100vh;
  ${below.medium`
    height: 120vh;
  `}
`

const PushDown = styled.div`
  display: none;
  /* padding: 10rem 0; */
  padding: 0.2rem 0 calc(30rem - 20px) 0;
  ${below.medium`
    ${handleFlex('column', 'center', 'center')};

  `}
`

export default IndexPage
