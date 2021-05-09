import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const StudentManagement = () => {
  const [Student, setStudent] = useState('')
  const handleChangeStudent = (e) => {
    setStudent(e.target.value)
  }
  const handleSaveStudent = () => {
    // post
    console.log(Student)
  }

  return (
    <div>
      <AddStudentList>학생 등록</AddStudentList>
      <StyledTextField id="outlined-basic" label="학생 등록" multiline rows={5} variant="outlined" placeholder="학번을 입력하세요." value={Student} onChange={handleChangeStudent}></StyledTextField>
      <div style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleSaveStudent}>
          저장
        </button>
      </div>
    </div>
  )
}

export default StudentManagement

const AddStudentList = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 20px 0;
`

const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    background: ${(props) => props.theme.BOARD_LIST_HOVER};
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
