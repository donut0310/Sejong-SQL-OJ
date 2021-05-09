import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const StudentManagement = () => {
  const [Student, setStudent] = useState([
    '19010001\n19010002\n19010003\n19010004\n19010005\n19010006\n19010007\n19010008\n19010009\n19010001\n19010002\n19010003\n19010004\n19010005\n19010006\n19010007\n19010008\n19010009\n',
  ])
  const handleChangeStudent = (e) => {
    setStudent(e.target.value)
    console.log(e.target.value)
  }
  const handleSaveStudent = () => {
    // post
    console.log('Student List saved \n' + Student)
  }

  return (
    <Wrapper>
      <StyledTextField id="outlined-basic" label="학생 등록" multiline rows={20} variant="outlined" placeholder="학번을 입력하세요." value={Student} onChange={handleChangeStudent}></StyledTextField>
      <div style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleSaveStudent}>
          저장
        </button>
      </div>
    </Wrapper>
  )
}

export default StudentManagement

const Wrapper = styled.div`
  padding: 10px;
`

const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    background: ${(props) => props.theme.INPUT_BACKGROUND};
  }

  .MuiInputBase-input {
    color: ${(props) => props.theme.GENERAL_FONT};
  }
  .MuiInputLabel-formControl {
    color: ${(props) => props.theme.MAIN_BORDER};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.POINT};
    font-weight: bold;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.POINT};
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: 1.5px solid ${(props) => props.theme.SUB_BORDER};
  }
`
