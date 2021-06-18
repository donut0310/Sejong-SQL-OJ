import React from 'react'
import styled from 'styled-components'

import Title from '../../components/pages/mainPage/Title'
import Contents from '../../components/pages/mainPage/Contents'

const Public = () => {
  return (
    <PageWrapper>
      <Title />
      <Contents />
    </PageWrapper>
  )
}

export default Public

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* border: 1px solid black; */
`
