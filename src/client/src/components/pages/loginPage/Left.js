import React from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <Container>
      <Title>
        SEJONG <br /> ONLINE JUDGE
      </Title>
      <SubTitle>로그인</SubTitle>
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
  background-color: ${(props) => props.theme.BACKGROUND};
`

const Title = styled.div`
  font-size: 3em;
  text-align: center;
  margin-bottom: 30px;

  color: ${(props) => props.theme.GENERAL_FONT};
`

const SubTitle = styled.div`
  font-size: 1.6em;
  margin-bottom: 30px;

  color: ${(props) => props.theme.GENERAL_FONT};
`
