import React, { useState } from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const ContentInput = ({ content, setContent }) => {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  const handleApplyContent = () => {
    setContent(content + input + '\n')
    setInput('')
  }

  return (
    <div>
      <StyledInput variant="outlined" label="내용 추가" multiline rows={3} type="text" placeholder="내용을 입력하세요." value={input} onChange={handleInputChange} />
      <div style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleApplyContent}>
          적용
        </button>
      </div>
    </div>
  )
}

export default ContentInput

const StyledInput = styled(TextField)`
  && {
    background: ${(props) => props.theme.INPUT_BACKGROUND};
    border-radius: 5px;
    width: 100%;
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
