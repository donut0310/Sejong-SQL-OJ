import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StudentManagement = () => {
  const [Student, setStudent] = useState()
  const handleChangeStudent = (e) => {
    setStudent(e.target.value)
    console.log(e.target.value)
  }
  const handleSaveStudent = () => {
    // post
    console.log('studentlist saved')
  }
  return (
    <div>
      <StyledInput type="text" placeholder="학번을 입력하세요." value={Student} onChange={handleChangeStudent}></StyledInput>
      <div style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleSaveStudent}>
          저장
        </button>
      </div>
    </div>
  )
}

export default StudentManagement

const StyledInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: none;
  background: ${(props) => props.theme.BOARD_LIST_HOVER};
  color: ${(props) => props.theme.GENERAL_FONT};
  border: none;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    background: ${(props) => props.theme.BOARD_TITLE};
  }
  &:focus {
    outline: 0;
  }
`
