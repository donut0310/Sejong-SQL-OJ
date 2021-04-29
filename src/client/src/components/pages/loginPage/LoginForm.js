import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (user) => console.log(user)

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput name="id" placeholder="아이디" {...register('id', { required: true })} autoFocus />
      <StyledInput name="password" placeholder="비밀번호" type="password" {...register('password', { required: true })} />
      <StyledButton type="submit">로그인</StyledButton>
    </StyledForm>
  )
}

export default LoginForm

const StyledForm = styled.form`
  width: 50%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  background: #f0f0f0;
  box-sizing: border-box;
  border: 0px;
  border-radius: 10px;
  margin: 8px;
  padding: 20px;
  &:focus {
    outline: 0;
  }
`

const StyledButton = styled.button`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.POINT};
  color: white;
  border: 0px;
  border-radius: 10px;
  margin: 8px;
  padding: 20px;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: #710f0f;
    cursor: pointer;
  }
`
