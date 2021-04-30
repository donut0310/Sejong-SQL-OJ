import React from 'react'
import reset from 'styled-reset'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { lightTheme, darkTheme } from './assets/themes'
import LoginPage from './containers/loginPage'
import Modal from './components/modal/Modal'
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
            <Modal />
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

  button#submit-btn {
    width: 60px;
    height: 30px;
    border: 0px;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
    color: white;
    background: ${(props) => props.theme.POINT};
    &:hover {
      cursor: pointer;
      background: #710f0f;
    }
  }

  input#input-form {
    padding: 5px;
    margin: 5px;
    border: 1px solid ${(props) => props.theme.SUB_BORDER};
    border-radius: 5px;
    background: ${(props) => props.theme.CONTENTS};
    color: ${(props) => props.theme.GENERAL_FONT};
    &:focus {
      outline: 0;
    }
  }

  select#select-form {
    padding: 5px;
    margin: 5px;
    border: 1px solid ${(props) => props.theme.SUB_BORDER};
    border-radius: 5px;
    background: ${(props) => props.theme.CONTENTS};
    color: ${(props) => props.theme.GENERAL_FONT};
    &:focus {
      outline: 0;
    }
  }


  ul#table-list {
    width: 80%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    border-radius: 10px;
    color: ${(props) => props.theme.GENERAL_FONT};
  }

  ul#title-tab {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px;
    box-sizing: border-box;
    background: ${(props) => props.theme.BOARD_TITLE};
    font-weight: 600;
    text-align: center;
  }

  ul#content-list {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 10px;
    background: ${(props) => props.theme.CONTENTS};
    font-weight: 400;
    &:hover {
      background: ${(props) => props.theme.BOARD_LIST_HOVER};
    }
  }

  li#content {
    text-align: center;
  }
`

const MainWrapper = styled.div`
  min-width: 375px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.BACKGROUND};
`
