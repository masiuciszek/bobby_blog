import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    /* font-family: 'Bellota', cursive;

font-family: 'Nunito', sans-serif; */

  *::before,
  *::after
  ,* {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    html {
      font-size: ${props => props.theme.appSize};
      font-family: 'Nunito', sans-serif;
    }
    body {
      box-sizing: border-box;
      font-family: 'Nunito', sans-serif;
      padding: 0;
      /* min-height: 100vh; */
      height: 100%;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
    }
    ul{
      list-style:none;
    }
    a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.size.a};
    }

    h1{
      font-size: ${props => props.theme.size.h1};
      font-family: 'Bellota', cursive;
    }
    h2{
      font-size: ${props => props.theme.size.h2};

    }
    h3{
      font-size: ${props => props.theme.size.h3};

    }
`

export default GlobalStyles
