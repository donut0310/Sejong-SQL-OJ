import React from 'react'
import styled from 'styled-components'

import Title from '../../components/pages/mainPage/Title'
import User from './User'
import Admin from './Admin'

const index = () => {
  return (
    <Container>
      <Title />
      <p>user</p>
      <User />
      <p>admin</p>
      <Admin />
    </Container>
  )
}

export default index

const Container = styled.div`
  color: ${(props) => props.theme.GENERAL_FONT};
`
