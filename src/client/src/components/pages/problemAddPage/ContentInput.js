import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const ContentInput = ({ contentInput, setContentInput }) => {
  const handleInputChange = (e) => {
    setContentInput(e.target.value)
  }

  return (
    <Wrapper>
      <TitleContainer>
        <Arrow />
        내용 입력
      </TitleContainer>
      <StyledInput variant="outlined" label="내용" multiline rows={10} type="text" placeholder="내용을 입력하세요." value={contentInput} onChange={handleInputChange} />
    </Wrapper>
  )
}

export default ContentInput

const Wrapper = styled.div`
  padding: 10px;
`

const TitleContainer = styled.div`
  margin: 10px 0;
  font-size: 1em;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
`
const Arrow = styled(ArrowForwardIosIcon)`
  && {
    width: 0.5em;
    margin-right: 5px;
    margin-bottom: 5px;
  }
`

const StyledInput = styled(TextField)`
  && {
    background: ${(props) => props.theme.HEADER_BACKGROUND};
    border-radius: 5px;
    width: 100%;
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
