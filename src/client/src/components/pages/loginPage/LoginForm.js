import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { logIn } from '../../../redux'

const LoginForm = ({ logIn }) => {
  const { register, errors, handleSubmit } = useForm()

  const history = useHistory()

  // TODO
  const onSubmit = async (data) => {
    console.log('data.id', data.id)
    console.log('data.password', data.password)

    const result = await logIn(data.id, data.password)
    // const res = await axios.post(`/api/v1/auth/signin`, { user_id: data.id, user_pw: data.password })

    if (result.isCompleted) {
      history.push('/')
    }
  }

  const handleRegisterBtn = () => {
    history.push('/register')
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput name="id" placeholder="아이디" ref={register({ required: true })} autoFocus />
      {errors.id && <p>아이디를 입력하세요</p>}
      <StyledInput name="password" placeholder="비밀번호" type="password" ref={register({ required: true })} />
      {errors.password && <p>비밀번호를 입력하세요</p>}
      <StyledButton type="submit" onClick={onSubmit}>
        로그인
      </StyledButton>
      <StyledLink onClick={handleRegisterBtn}>회원가입</StyledLink>
    </StyledForm>
  )
}

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps = {
  logIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

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

const StyledLink = styled(Link)`
  && {
    font-size: 0.8em;
    margin: 5px;
    align-self: flex-end;
    color: ${(props) => props.theme.POINT};
    cursor: pointer;
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
