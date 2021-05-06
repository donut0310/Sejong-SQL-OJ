import React, { useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TextField, Button, Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const RegisterForm = () => {
  const history = useHistory()

  const { register, handleSubmit, watch, errors } = useForm()
  const password = useRef()
  password.current = watch('password')

  const onSubmit = async (data) => {
    console.log('data.id', data.id)
    console.log('data.name', data.name)
    console.log('data.password', data.password)

    const res = await axios.post(`/api/v1/user/signup`, { user_id: data.id, user_name: data.name, user_pw: data.password })
    console.log(res)
    if (res.status === 200) {
      history.push('/login')
    }
  }

  return (
    <PageWrapper>
      <Title>SEJONG</Title>
      <Title>ONLINE JUDGE</Title>
      <SubTitle>회원가입</SubTitle>
      <StyledForm maxWidth="lg">
        <RegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <RegisterTextField name="id" label="아이디" inputRef={register({ required: true, maxLength: 10 })} placeholder="Enter your ID" variant="outlined" size="small" />
          {errors.id && errors.id.type === 'required' && <ErrorMessage> This ID field is required</ErrorMessage>}
          {errors.id && errors.id.type === 'maxLength' && <ErrorMessage> Your input exceed maximum length</ErrorMessage>}

          <RegisterTextField name="name" label="이름" inputRef={register({ required: true, maxLength: 10 })} placeholder="Enter your name" variant="outlined" size="small" />
          {errors.name && errors.name.type === 'required' && <ErrorMessage> This name field is required</ErrorMessage>}
          {errors.name && errors.name.type === 'maxLength' && <ErrorMessage> Your input exceed maximum length</ErrorMessage>}

          <RegisterTextField name="password" inputRef={register({ required: true, minLength: 4 })} type="password" label="비밀번호" placeholder="Enter your password" variant="outlined" size="small" />
          {errors.password && errors.password.type === 'required' && <ErrorMessage> This password field is required</ErrorMessage>}
          {errors.password && errors.password.type === 'minLength' && <ErrorMessage> Password must have at least 4 characters</ErrorMessage>}

          <RegisterTextField
            name="password_confirm"
            inputRef={register({
              required: true,
              validate: (value) => value === password.current,
            })}
            type="password"
            label="비밀번호 확인"
            placeholder="Enter your password one more time"
            variant="outlined"
            size="small"
          />
          {errors.password_confirm && errors.password_confirm.type === 'required' && <ErrorMessage> This password confirm field is required</ErrorMessage>}
          {errors.password_confirm && errors.password_confirm.type === 'validate' && <ErrorMessage>The passwords do not match</ErrorMessage>}

          <SubmitBtn type="submit" onClick={handleSubmit(onSubmit)}>
            회원가입
          </SubmitBtn>
        </RegisterFormWrapper>
      </StyledForm>
    </PageWrapper>
  )
}

export default RegisterForm

const PageWrapper = styled.div`
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  font-size: 2.6rem;
  /* font-weight: bold; */
`

const SubTitle = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 70px;
`

const RegisterFormWrapper = styled.form`
  min-width: 300px;

  && {
    display: flex;
    flex-direction: column;
  }

  padding: 8px;
  border-radius: 5px;
`

const RegisterTextField = styled(TextField)`
  && {
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
  margin-top: 4px;
  margin-left: 10px;
  margin-bottom: 4px;
`

const SubmitBtn = styled(Button)`
  && {
    margin-top: 10px;
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
