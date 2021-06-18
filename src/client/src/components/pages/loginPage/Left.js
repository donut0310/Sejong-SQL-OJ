import React from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <Container>
      <Title>
        <div style={{ fontSize: '3.4rem', margin: '5px 0' }}>SEJONG</div>
        <div style={{ fontSize: '2.4rem' }}>ONLINE JUDGE</div>
      </Title>
      <SubTitle>로그인</SubTitle>
      <LoginForm />
      <Footer>Copyright © 2021 세종컴공 All rights reserved.</Footer>
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
  background-color: ${(props) => props.theme.BACKGROUND};
`

const Title = styled.div`
  font-size: 3em;
  text-align: center;
  margin-bottom: 30px;
  font-family: Times New Roman, serif;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.GENERAL_FONT};
`

const SubTitle = styled.div`
  font-size: 1.6em;
  margin-bottom: 30px;
  color: ${(props) => props.theme.GENERAL_FONT};
`

const Footer = styled.div`
  margin-top: 50px;
  padding-top: 30px;
  color: ${(props) => props.theme.GENERAL_FONT};
`
