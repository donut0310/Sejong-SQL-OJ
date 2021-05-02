import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import CompleteTable from './CompleteTable'
import IncompleteTable from './IncompleteTable'

const UserMainPage = () => {
  return (
    <Container>
      <Title />
      <div style={{ margin: '10px' }}>아직 안 푼 문제</div>
      <IncompleteTable />
      <div style={{ margin: '10px' }}>풀이 완료!</div>
      <CompleteTable />
    </Container>
  )
}

export default UserMainPage

const Container = styled.div`
  color: ${(props) => props.theme.GENERAL_FONT};
`
