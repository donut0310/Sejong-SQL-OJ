import React from 'react'
import styled from 'styled-components'

const Right = () => {
  return <Container></Container>
}

export default Right

const Container = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.POINT};
`
