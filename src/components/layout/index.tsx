import * as React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import styled from 'styled-components'
import GlobalStyles from './Global'
import Seo from '../SEO/Seo'
import { handleFlex } from '../styled/helpers'
import Nav from '../pageElements/nav/Nav'
import Footer from '../pageElements/footer/Footer'
import { mainTheme } from './themes'
interface Props {
  children: React.ReactNode
}

export const Page = styled.section`
  max-width: ${props => props.theme.size.maxWidth};
  height: 100%;
  margin: 0 auto;
  ${handleFlex('column', 'center', 'center')};
`

const Main = styled.main`
  flex-grow: 1 auto;
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Seo />
      <GlobalStyles />
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
