import React from 'react'
import styled from 'styled-components'
import IncompleteTable from '../../components/pages/mainPage/IncompleteTable'
import CompleteTable from '../../components/pages/mainPage/CompleteTable'

const User = () => {
  return (
    <Container>
      <div style={{ margin: '10px', fontWeight: '600' }}>아직 안 푼 문제</div>
      <IncompleteTable />
      <div style={{ margin: '10px', fontWeight: '600' }}>풀이 완료!</div>
      <CompleteTable />
    </Container>
  )
}

export default User

const Container = styled.div`
  color: ${(props) => props.theme.GENERAL_FONT};
`
