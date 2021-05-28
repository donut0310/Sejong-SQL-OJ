import React, { useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TextField, Button, Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

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

  const handleGoBack = () => {
    history.goBack()
  }

  return (
    <PageWrapper>
      <Title>
        SEJONG
        <br />
        ONLINE JUDGE
      </Title>
      <SubTitle>회원가입</SubTitle>

      <Notice>
        <AlertIcon />
        학생의 경우 학번으로, 교·강사의 경우 학교 E-mail의 아이디로 회원가입하시길 바랍니다.
      </Notice>
      <StyledForm maxWidth="lg">
        <RegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <RegisterTextField name="id" label="아이디" inputRef={register({ required: true })} placeholder="아이디를 입력하세요." variant="outlined" size="small" />
          {errors.id && errors.id.type === 'required' && <ErrorMessage> This ID field is required</ErrorMessage>}

          <RegisterTextField name="name" label="이름" inputRef={register({ required: true })} placeholder="이름을 입력하세요." variant="outlined" size="small" />
          {errors.name && errors.name.type === 'required' && <ErrorMessage> This name field is required</ErrorMessage>}

          <RegisterTextField
            name="password"
            inputRef={register({ required: true, minLength: 4 })}
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            variant="outlined"
            size="small"
          />
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
            placeholder="비밀번호를 한 번 더 입력하세요."
            variant="outlined"
            size="small"
          />
          {errors.password_confirm && errors.password_confirm.type === 'required' && <ErrorMessage> This password confirm field is required</ErrorMessage>}
          {errors.password_confirm && errors.password_confirm.type === 'validate' && <ErrorMessage>The passwords do not match</ErrorMessage>}

          <SubmitBtn type="submit" onClick={handleSubmit(onSubmit)}>
            회원가입
          </SubmitBtn>
          <SubmitBtn type="submit" onClick={handleGoBack}>
            취소
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

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.BACKGROUND};
`

const Notice = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.GENERAL_FONT};
  background: ${(props) => props.theme.NOTICE_BACKGROUND};
  border-radius: 5px;

  line-height: 130%;

  margin-top: 20px;
  margin-bottom: 20px;
`

const StyledForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const AlertIcon = styled(ErrorOutlineIcon)`
  && {
    margin-right: 10px;
    font-size: 1.6rem;
    color: ${(props) => props.theme.POINT};
  }
`
