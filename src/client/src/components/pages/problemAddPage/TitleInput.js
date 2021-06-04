import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const TitleInput = ({ title, setTitle }) => {
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <Wrapper>
      <TitleContainer>문제 제목</TitleContainer>
      <StyledInput value={title} variant="outlined" label="제목" size="small" type="text" placeholder="제목을 입력하세요." autoFocus onChange={handleTitleChange} />
    </Wrapper>
  )
}

export default TitleInput

const Wrapper = styled.div`
  margin-bottom: 60px;
`

const TitleContainer = styled.div`
  margin-bottom: 10px;
  font-size: 1.4em;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

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
