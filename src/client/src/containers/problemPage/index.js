import React from 'react'
import styled from 'styled-components'
import User from './User'
import Admin from './Admin'

const ProblemPage = () => {
  return (
    <Container>
      <p>user</p>
      <User />
      <p>admin</p>
      <Admin />
    </Container>
  )
}

export default ProblemPage

const Container = styled.div`
  text-align: end;
  color: ${(props) => props.theme.GENERAL_FONT};
`
