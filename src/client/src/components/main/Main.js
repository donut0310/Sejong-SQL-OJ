import { Container } from '@material-ui/core'
import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import CodingPage from '../../containers/codingPage'
import ProblemPage from '../../containers/problemPage'
import StatusPage from '../../containers/statusPage'
import MainPage from '../../containers/mainPage'

const Main = () => {
  return (
    <MainWrapper maxWidth="md">
      <Route exact path="/" component={MainPage} />
      <Route path="/coding" component={CodingPage} />
      <Route path="/problems" component={ProblemPage} />
      <Route path="/status" component={StatusPage} />
    </MainWrapper>
  )
}

export default Main

const MainWrapper = styled(Container)`
  flex: 1;
  border: 1px solid red;

  display: flex;
  flex-direction: column;

  padding-top: 20px;
  padding-bottom: 20px;
`
