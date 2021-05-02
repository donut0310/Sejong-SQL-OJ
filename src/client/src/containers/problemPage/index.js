import React from 'react'
import styled from 'styled-components'
import User from './User'
import Admin from './Admin'
import Title from '../../components/title/Title'

const ProblemPage = () => {
  const problemInfo = {
    classInfo: '데이터베이스1(김지환)',
    weekInfo: '7주차 실습',
    startTime: 'Infinite',
    endTime: 'Infinite',
  }

  return (
    <Container>
      <Title problemInfo={problemInfo} />
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
