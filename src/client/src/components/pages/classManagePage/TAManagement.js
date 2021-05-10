import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const TAManagement = () => {
  // dummy data TA, classId
  const [TA, setTA] = useState(['16010001', '16010002'])
  const classId = '1'
  //

  const textFieldTA = TA.join('\r\n')

  const handleChangeTA = (e) => {
    setTA(e.target.value.split(/\r\n|\r|\n/))
    console.log(TA)
  }

  const handleSaveTA = () => {
    console.log('TA List', TA)
    ;(async () => {
      await axios
        .post(`/api/v1/course/enrollStd/${classId}`, { assists: TA })
        .then((res) => console.log('TA List saved\n' + res))
        .catch((err) => console.log(err))
    })()
  }

  return (
    <Wrapper>
      <StyledTextField id="outlined-basic" label="조교 등록" multiline rows={20} variant="outlined" placeholder="학번을 입력하세요." value={textFieldTA} onChange={handleChangeTA}></StyledTextField>
      <div style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleSaveTA}>
          저장
        </button>
      </div>
    </Wrapper>
  )
}

export default TAManagement

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
