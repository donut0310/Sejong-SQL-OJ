import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const StudentManagement = ({ student, setStudent, handleSaveStudent }) => {
  const handleChangeStudent = (e) => {
    setStudent(e.target.value.split(/\r\n|\r|\n/))
    console.log(student)
  }

  return (
    <Wrapper>
      <StyledTextField
        id="outlined-basic"
        label="학생 목록"
        multiline
        rows={20}
        variant="outlined"
        placeholder="학번을 입력하세요."
        value={student.join('\r\n')}
        onChange={handleChangeStudent}
      ></StyledTextField>
      <div style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleSaveStudent}>
          수정
        </button>
      </div>
    </Wrapper>
  )
}

export default StudentManagement

const Wrapper = styled.div`
  padding: 20px 10px 10px 10px;
  border: 1px solid ${(props) => props.theme.SUB_BORDER};
  background: ${(props) => props.theme.INPUT_BACKGROUND};
  border-radius: 5px;
`

const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    background: ${(props) => props.theme.BACKGROUND};
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
