import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const TAManagement = () => {
  const [TA, setTA] = useState(['17010001\n16010001'])
  const handleChangeTA = (e) => {
    setTA(e.target.value)
    console.log(e.target.value)
  }
  const handleSaveTA = () => {
    // post
    console.log('TA List saved \n' + TA)
  }
  return (
    <div>
      <AddTAList>조교 등록</AddTAList>
      <StyledTextField id="outlined-basic" label="조교 등록" multiline rows={3} variant="outlined" placeholder="학번을 입력하세요." value={TA} onChange={handleChangeTA}></StyledTextField>
      <div style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleSaveTA}>
          저장
        </button>
      </div>
    </div>
  )
}

export default TAManagement

const AddTAList = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 20px 0;
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
