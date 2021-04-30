import { Container } from '@material-ui/core'
import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import CodingPage from '../../containers/codingPage'
import StatusPage from '../../containers/statusPage'

const Main = () => {
  return (
    <MainWrapper maxWidth="md">
      <Route path="/main/coding" component={CodingPage} />
      <Route path="/main/status" component={StatusPage} />
    </MainWrapper>
  )
}

export default Main

const MainWrapper = styled(Container)`
  flex: 1;
  /* background: ${(props) => props.theme.BACKGROUND}; */
  border: 1px solid red;

  display: flex;
  flex-direction: column;
`
