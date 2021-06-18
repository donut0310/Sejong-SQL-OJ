import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const ProfessorManagement = ({ professor, setProfessor }) => {
  const handleChangeNewProfessor = (e) => {
    setProfessor(e.target.value.split(/\r\n|\r|\n/))
  }

  return <StyledTextField value={professor} id="outlined-basic" label="교수 입력" multiline rows={3} variant="outlined" placeholder="담당 교수를 입력하세요." onChange={handleChangeNewProfessor} />
}

export default ProfessorManagement

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
