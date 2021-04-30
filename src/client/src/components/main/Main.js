import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import StatusPage from '../../containers/statusPage'

const Main = () => {
  return (
    <MainWrapper>
      <Route path="/main/status">
        <StatusPage />
      </Route>
    </MainWrapper>
  )
}

export default Main

const MainWrapper = styled.div`
  flex: 1;
  background: ${(props) => props.theme.BACKGROUND};
`
