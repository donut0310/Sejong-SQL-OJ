import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
const TitleInput = () => {
  const handleTitleChange = (e) => {
    console.log('title: ' + `${e.target.value}`)
  }
  return (
    <div>
      <p style={{ margin: '25px 0 10px 0', fontSize: '1.2em', fontWeight: '600' }}>문제 제목</p>
      <StyledInput variant="outlined" label="문제 제목" size="small" type="text" placeholder="제목을 입력하세요." autoFocus onChange={handleTitleChange}></StyledInput>
    </div>
  )
}

export default TitleInput

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
