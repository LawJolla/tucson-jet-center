import React, { Component } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import ThemeConstructor from "../themes/themeConstructor"
// import Header from './Header';
import Meta from "./Meta"

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  // max-width: ${props => props.theme.maxWidth};
  // margin: 0 auto;
  // padding: 2rem;
`

const GlobalStyle = createGlobalStyle`
  @font-face {
    // font-family: 'Montserrat';
    // src: url('https://fonts.googleapis.com/css?family=Montserrat') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: ${p => p.theme.spacing.five}px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Avenir';
  }
  a {
    text-decoration: none;

  }
   button {
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    background: none;
    font-family: "Montserrat", sans-serif;
    font-size: inherit;
    color: inherit;
    letter-spacing: 0.1em;
  }
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={new ThemeConstructor()}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page
