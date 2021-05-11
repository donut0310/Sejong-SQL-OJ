import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const ContentInput = ({ contentInput, setContentInput }) => {
  const handleInputChange = (e) => {
    setContentInput(e.target.value)
  }

  return (
    <div>
      <StyledInput variant="outlined" label="내용 추가" multiline rows={3} type="text" placeholder="내용을 입력하세요." value={contentInput} onChange={handleInputChange} />
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
