import React from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <Container>
      <div style={{ fontSize: '40px', textAlign: 'center', marginBottom: '30px' }}>
        SEJONG <br /> ONLINE JUDGE
      </div>
      <div style={{ fontSize: '30px', marginBottom: '30px' }}>LOG IN</div>
      <LoginForm />
    </Container>
  )
}

export default Login

const Container = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`