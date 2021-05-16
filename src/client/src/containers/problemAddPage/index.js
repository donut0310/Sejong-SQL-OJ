import React from 'react'
import styled from 'styled-components'
import Admin from './Admin'

const index = () => {
  return (
    <Container>
      <Admin />
    </Container>
  )
}

export default index

const Container = styled.div`
  color: ${(props) => props.theme.GENERAL_FONT};
`
