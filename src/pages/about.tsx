import * as React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout'

interface Props {}

const About: React.FC<PageProps<Props>> = () => {
  return (
    <Layout>
      <h1> About Page </h1>
    </Layout>
  )
}
export default About
