import React from 'react'
import styled from 'styled-components'
import { Hidden } from '@material-ui/core'
import Left from '../../components/pages/loginPage/Left'
import Right from '../../components/pages/loginPage/Right'

const Public = () => {
  return (
    <LoginPageContainer>
      <Left />
      <Hidden smDown>
        <Right />
      </Hidden>
    </LoginPageContainer>
  )
}

export default Public

const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
