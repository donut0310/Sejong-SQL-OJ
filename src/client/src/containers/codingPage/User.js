import React from 'react'
import styled from 'styled-components'

import Title from '../../components/title/Title'
import SubTitle from '../../components/pages/codingPage/SubTitle'
import Code from '../../components/pages/codingPage/Code'
import Problem from '../../components/pages/codingPage/Problem'
import Result from '../../components/pages/codingPage/Result'

const User = () => {
  const problemInfo = {
    classInfo: '데이터베이스1(김지환)',
    weekInfo: '7주차 실습',
    problemInfo: '동물 보호소',
    startTime: 'Infinite',
    endTime: 'Infinite',
  }

  return (
    <PageWrapper>
      <Title problemInfo={problemInfo} />
      <SubTitle name="문제 내용" />
      <Problem />
      <SubTitle name="코드 작성" />
      <Code />
      <SubTitle name="실행 결과" />
      <Result />
    </PageWrapper>
  )
}

export default User

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
