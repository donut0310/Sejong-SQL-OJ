import React from 'react'
import reset from 'styled-reset'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { lightTheme, darkTheme } from './assets/themes'
import LoginPage from './containers/loginPage'
import Main from './components/main/Main'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/main">
          <MainWrapper>
            <Header />
            <Main />
            <Footer />
          </MainWrapper>
        </Route>
      </Switch>
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

const MainWrapper = styled.div`
  min-width: 375px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.BACKGROUND};
`
