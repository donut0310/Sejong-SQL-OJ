import React from 'react'
import styled from 'styled-components'
import User from './User'
import Admin from './Admin'

const StatusPage = () => {
  return (
    <Container>
      <p>user</p>
      <User />
      <p>admin</p>
      <Admin />
    </Container>
  )
}

export default StatusPage

const Container = styled.div`
  text-align: center;
  color: ${(props) => props.theme.GENERAL_FONT};
`
