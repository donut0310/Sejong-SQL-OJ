import React from 'react'
import reset from 'styled-reset'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux'
import { Container } from '@material-ui/core'

import { lightTheme, darkTheme } from './assets/themes'
// import Header from './components/Header'
// import Main from './components/Main'
// import Footer from './components/Footer'
// import Modal from './components/Modal'

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* <AppWrapper maxWidth="lg">
        <Header />
        <Main />
        <Footer />
        <Modal />
      </AppWrapper> */}
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme.mode,
  }
}

export default connect(mapStateToProps)(App)

const GlobalStyles = createGlobalStyle`
  ${reset};
  
  html, body {
    width: 100%;
    height: 100%;
  };
`

// const AppWrapper = styled(Container)`
//   && {
//     min-height: 100vh;

//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `
