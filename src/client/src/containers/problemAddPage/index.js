import React from 'react'
import styled from 'styled-components'
import Title from '../../components/title/Title'
import Admin from './Admin'

const index = () => {
  const problemInfo = {
    classInfo: '데이터베이스1(김지환)',
    weekInfo: '7주차 실습',
  }

  return (
    <Container>
      <Title problemInfo={problemInfo} />
      <Admin />
    </Container>
  )
}

export default index

const Container = styled.div`
  color: ${(props) => props.theme.GENERAL_FONT};
`
