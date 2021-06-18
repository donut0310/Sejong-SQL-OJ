import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link, Button, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import Message from './Message'

import { logIn } from '../../../redux'

const LoginForm = ({ logIn }) => {
  const { register, errors, handleSubmit } = useForm()
  const [isOpen, setIsOpen] = useState(false)

  const history = useHistory()

  const onSubmit = async (data) => {
    const result = await logIn(data.id, data.password)

    if (result.isCompleted) {
      const authResult = await axios.get('/api/v1/user/auth')
      if (authResult.data.result.role === 2) history.push('/admin')
      else history.push('/')
    } else {
      setIsOpen(true)
    }
  }

  const handleRegisterBtn = () => {
    history.push('/register')
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <LoginTextField variant="outlined" size="small" name="id" label="아이디" placeholder="아이디" inputRef={register({ required: true })} autoFocus />
        {errors.id && <ErrorMessage>아이디를 입력하세요</ErrorMessage>}
        <LoginTextField variant="outlined" size="small" name="password" label="비밀번호" placeholder="비밀번호" type="password" inputRef={register({ required: true })} />
        {errors.password && <ErrorMessage>비밀번호를 입력하세요</ErrorMessage>}
        <StyledButton type="submit" onClick={handleSubmit(onSubmit)}>
          로그인
        </StyledButton>
        <StyledLink onClick={handleRegisterBtn}>회원가입</StyledLink>
      </StyledForm>

      <Message isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
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

const LoginTextField = styled(TextField)`
  && {
    background: ${(props) => props.theme.INPUT_BACKGROUND};
    border-radius: 5px;
    width: 100%;
    margin-top: 10px;
  }

  .MuiInputBase-input {
    color: ${(props) => props.theme.GENERAL_FONT};
  }
  .MuiInputLabel-formControl {
    color: ${(props) => props.theme.GENERAL_FONT};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.POINT};
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.POINT};
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: 1.5px solid ${(props) => props.theme.SUB_BORDER};
  }
`

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.POINT};
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-self: start;
  margin-top: 4px;
  margin-left: 10px;
  margin-bottom: 4px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.POINT};
  color: white;
  border: 0px;
  font-size: 0.8rem;
  border-radius: 4px;
  margin: 8px;
  padding: 10px;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: #710f0f;
    cursor: pointer;
  }
`
const SubmitBtn = styled(Button)`
  && {
    margin: 10px 0;
    width: 100%;
  }
  .MuiButton-label {
    /* color: ${(props) => props.theme.GENERAL_FONT}; */
    color: white;
    z-index: 1;
  }
  .MuiTouchRipple-root {
    background: ${(props) => props.theme.POINT};
  }
`
