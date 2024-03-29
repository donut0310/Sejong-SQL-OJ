import React, { useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TextField, Button, Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

const RegisterForm = () => {
  const history = useHistory()

  const { register, handleSubmit, watch, errors } = useForm()
  const password = useRef()
  password.current = watch('password')

  const onSubmit = async (data) => {
    const res = await axios.post(`/api/v1/user/signup`, { user_id: data.id, user_name: data.name, user_pw: data.password })
    if (res.status === 200) {
      history.push('/login')
    }
  }

  const handleGoBack = () => {
    history.goBack()
  }

  return (
    <PageWrapper>
      <Title>
        <div style={{ fontSize: '3.4rem', margin: '5px 0' }}>SEJONG</div>
        <div style={{ fontSize: '2.4rem' }}>ONLINE JUDGE</div>
      </Title>
      <SubTitle>회원가입</SubTitle>

      <Notice>
        <AlertIcon />
        학생의 경우 학번으로, 교·강사의 경우 학교 E-mail의 아이디로 회원가입하시길 바랍니다.
      </Notice>
      <StyledForm maxWidth="lg">
        <RegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <RegisterTextField name="id" label="아이디" inputRef={register({ required: true })} placeholder="아이디를 입력하세요." variant="outlined" size="small" />
          {errors.id && errors.id.type === 'required' && <ErrorMessage> 아이디를 입력하세요.</ErrorMessage>}

          <RegisterTextField name="name" label="이름" inputRef={register({ required: true })} placeholder="이름을 입력하세요." variant="outlined" size="small" />
          {errors.name && errors.name.type === 'required' && <ErrorMessage> 이름을 입력하세요.</ErrorMessage>}

          <RegisterTextField
            name="password"
            inputRef={register({ required: true, minLength: 4 })}
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            variant="outlined"
            size="small"
          />
          {errors.password && errors.password.type === 'required' && <ErrorMessage> 비밀번호를 입력하세요.</ErrorMessage>}
          {errors.password && errors.password.type === 'minLength' && <ErrorMessage> 비밀번호는 최소 4자리로 입력하세요.</ErrorMessage>}

          <RegisterTextField
            name="password_confirm"
            inputRef={register({
              required: true,
              validate: (value) => value === password.current,
            })}
            type="password"
            label="비밀번호 확인"
            placeholder="비밀번호를 한 번 더 입력하세요."
            variant="outlined"
            size="small"
          />
          {errors.password_confirm && errors.password_confirm.type === 'required' && <ErrorMessage> 비밀번호 확인을 입력하세요.</ErrorMessage>}
          {errors.password_confirm && errors.password_confirm.type === 'validate' && <ErrorMessage>비밀번호를 확인하세요.</ErrorMessage>}

          <SubmitBtn type="submit" onClick={handleSubmit(onSubmit)}>
            회원가입
          </SubmitBtn>
          <CancelBtn type="submit" onClick={handleGoBack}>
            취소
          </CancelBtn>
        </RegisterFormWrapper>
      </StyledForm>

      <Footer>Copyright © 2021 세종컴공 All rights reserved.</Footer>
    </PageWrapper>
  )
}

export default RegisterForm

const PageWrapper = styled.div`
  padding: 50px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.BACKGROUND};
`

const Notice = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  color: #242323;
  background: ${(props) => props.theme.NOTICE_BACKGROUND};
  border-radius: 5px;

  line-height: 130%;
  padding: 15px 30px;
  margin-top: 20px;
`

const StyledForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
`

const Footer = styled.div`
  margin-top: 50px;
  padding-top: 30px;
  color: ${(props) => props.theme.GENERAL_FONT};
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
  font-size: 1.6rem;
  font-weight: 400;

  color: ${(props) => props.theme.GENERAL_FONT};

  margin-top: 10px;
  margin-bottom: 30px;
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
    background: ${(props) => props.theme.INPUT_BACKGROUND};
    border-radius: 5px;

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

const SubmitBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.POINT};
  color: white;
  border: 0px;
  font-size: 0.8rem;
  border-radius: 4px;
  margin-top: 8px;
  padding: 10px;

  &:focus {
    outline: 0;
  }
  &:hover {
    background: #710f0f;
    cursor: pointer;
  }
`

const CancelBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.NOTICE_BACKGROUND};
  color: black;
  border: 0px;
  font-size: 0.8rem;
  border-radius: 4px;
  margin-top: 8px;
  padding: 10px;

  &:focus {
    outline: 0;
  }
  &:hover {
    background: #78746f;
    color: white;
    cursor: pointer;
  }
`

const AlertIcon = styled(ErrorOutlineIcon)`
  && {
    margin-right: 10px;
    font-size: 1.6rem;
    color: ${(props) => props.theme.POINT};
  }
`
