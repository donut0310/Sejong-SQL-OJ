import React from 'react'
import reset from 'styled-reset'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { lightTheme, darkTheme } from './assets/themes'
import Modal from './components/modal/Modal'
import Main from './components/main/Main'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import LoginPage from './containers/loginPage'
import RegisterPage from './containers/registerPage'
import AutoScrollUp from './AutoScrollUp'
import ScrollUp from './ScrollUp'

import Auth from './components/auth/Auth'

const App = ({ theme }) => {
  const MainComponent = () => {
    return (
      <>
        <MainWrapper>
          <Modal />
          <Header />
          <Main />
          <Footer />
        </MainWrapper>
        <ScrollUp />
      </>
    )
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AutoScrollUp>
        <GlobalStyles />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="/" component={Auth(MainComponent, true)}>
            {/* <MainWrapper>
              <Modal />
              <Header />
              <Main />
              <Footer />
            </MainWrapper>
            <ScrollUp /> */}
          </Route>
        </Switch>
      </AutoScrollUp>
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
    background: ${(props) => props.theme.BACKGROUND};
  };

  button#submit-btn {
    width: 60px;
    height: 30px;
    border: 0px;
    border-radius: 5px;
    margin: 5px 0px 5px 5px;
    padding: 5px;
    color: white;
    background: ${(props) => props.theme.POINT};
    &:hover {
      cursor: pointer;
      background: #710f0f;
    }
    &:disabled {
      cursor: default;
      background: ${(props) => props.theme.MAIN_BORDER};
    }
  }

  input.input-form {
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
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px;
    border-radius: 10px;
    color: ${(props) => props.theme.GENERAL_FONT};
    &:hover {
      cursor: default;
    }
  }

  ul#title-tab {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: ${(props) => props.theme.CONTENTS};
    font-weight: 400;
    &:hover {
      background: ${(props) => props.theme.BOARD_LIST_HOVER};
    }
  }

  li#content {
    text-align: center;
    button#problem {
      background: none;
      color: ${(props) => props.theme.GENERAL_FONT};
      border: none;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
        font-weight: 600;
      }
    }
    button#problem-disable {
      background: none;
      color: gray;
      border: none;
      text-decoration: line-through;
    }
  }

/* // ! table  */
  ul#table-table-list {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    color: ${(props) => props.theme.GENERAL_FONT};
    overflow:auto;
  }

  ul#table-title-tab {
    display: flex;
    flex-direction: row;
    padding: 10px;
    box-sizing: border-box;
    background: ${(props) => props.theme.BOARD_TITLE};
    font-weight: 600;
    text-align: center;
  }

  ul#table-content-list {
    box-sizing: border-box;
    display: flex;
    padding: 10px;
    background: ${(props) => props.theme.CONTENTS};
    font-weight: 400;
  }

  ul#table-content-list-coding {
    box-sizing: border-box;
    display: flex;
    padding: 10px;
    background: ${(props) => props.theme.BACKGROUND};
    font-weight: 400;
    /* 행 줄 */
    border-bottom: 0.3px solid ${(props) => props.theme.BOARD_LIST_HOVER};
  }

  li#table-content {
    width:140px;
    display: flex;
    text-align: center;
    justify-content: center;
    overflow:auto;
  }
  /* // ! table  */
`

const MainWrapper = styled.div`
  min-width: 375px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.BACKGROUND};
`
