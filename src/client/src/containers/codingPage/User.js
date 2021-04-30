import React from 'react'
import styled from 'styled-components'

import Title from '../../components/pages/codingPage/Title'
import Code from '../../components/pages/codingPage/Code'
import Problem from '../../components/pages/codingPage/Problem'
import Result from '../../components/pages/codingPage/Result'

const User = () => {
  return (
    <PageWrapper>
      <Title name="문제 내용" />
      <Problem />
      <Title name="코드 작성" />
      <Code />
      <Title name="실행 결과" />
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
