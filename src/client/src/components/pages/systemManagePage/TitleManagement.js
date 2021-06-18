import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const TitleManagement = ({ className, setClassName }) => {
  const handleChangeNewClassName = (e) => {
    setClassName(e.target.value)
  }

  return <StyledTextField id="outlined-basic" value={className} label="강좌 이름" variant="outlined" placeholder={'강좌명을 입력하세요.'} onChange={handleChangeNewClassName} />
}

export default TitleManagement

const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    background: ${(props) => props.theme.INPUT_BACKGROUND};
    margin-right: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
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
