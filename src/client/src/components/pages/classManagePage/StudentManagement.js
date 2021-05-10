import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const StudentManagement = () => {
  // dummy data Student, classId
  const [Student, setStudent] = useState([
    '19010001',
    '19010002',
    '19010003',
    '19010004',
    '19010005',
    '19010006',
    '19010007',
    '19010008',
    '19010009',
    '19010001',
    '19010002',
    '19010003',
    '19010004',
    '19010005',
    '19010006',
    '19010007',
    '19010008',
    '19010009',
  ])
  const classId = '1'
  //

  const textFieldStudent = Student.join('\r\n')

  const handleChangeStudent = (e) => {
    setStudent(e.target.value.split(/\r\n|\r|\n/))
    console.log(Student)
  }

  const handleSaveStudent = () => {
    console.log('Student List', Student)
    ;(async () => {
      await axios
        .post(`/api/v1/course/enrollStd/${classId}`, { stds: Student })
        .then((res) => console.log('Student List saved\n' + res))
        .catch((err) => console.log(err))
    })()
  }

  return (
    <Wrapper>
      <StyledTextField
        id="outlined-basic"
        label="학생 등록"
        multiline
        rows={20}
        variant="outlined"
        placeholder="학번을 입력하세요."
        value={textFieldStudent}
        onChange={handleChangeStudent}
      ></StyledTextField>
      <div style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleSaveStudent}>
          저장
        </button>
      </div>
    </Wrapper>
  )
}

export default StudentManagement

const Wrapper = styled.div``

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
