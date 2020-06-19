import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import Layout, { Page } from '../components/layout'
import Title from '../components/pageElements/Title'
import AboutMe from '../components/about/AboutMe'
import { IFluidObject } from 'gatsby-background-image'

interface Query extends PageProps {
  data: {
    profile: {
      childImageSharp: {
        fluid: IFluidObject
      }
    }
  }
}

const About: React.FC<Query> = ({ data }) => {
  const {
    profile: { childImageSharp },
  } = data

  return (
    <Layout>
      <Page>
        <Title title="Who am I ?" />
        <AboutMe profileImg={childImageSharp} />
      </Page>
    </Layout>
  )
}

export const PAGE_QUERY = graphql`
  {
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default About
