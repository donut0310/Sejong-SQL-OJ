import React from 'react'
import styled from 'styled-components'

import RegisterForm from '../../components/pages/registerPage/RegisterForm'

const Public = () => {
  return (
    <PageWrapper>
      <RegisterForm />
    </PageWrapper>
  )
}

export default Public

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
