import React from 'react'
import Layout, { Page } from '../components/layout'
import styled from 'styled-components'
import Title from '../components/pageElements/Title'
import { handleFlex } from '../components/styled/helpers'

const NotFoundPage = () => (
  <Layout>
    <Page>
      <ErrorWrapper>
        <Title
          title="Ooops page not found"
          subTitle="please had back"
          cta
          ctaText="Home"
          ctaPath="/"
        />
      </ErrorWrapper>
    </Page>
  </Layout>
)

const ErrorWrapper = styled.section`
  padding: 1rem;
  min-height: 80vh;
  ${handleFlex('column', 'center', 'center')}
`
export default NotFoundPage
