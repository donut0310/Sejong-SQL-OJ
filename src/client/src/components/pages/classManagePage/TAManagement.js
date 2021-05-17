import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const TAManagement = ({ currentTA, setCurrentTA, updateTA, setUpdateTA, handleAddTa, handleDeleteTA }) => {
  const handleChangeCurTA = (e) => {
    setCurrentTA(e.target.value.split(/\r\n|\r|\n/))
    console.log('currentTA', currentTA)
  }

  const handleChangeUpdateTA = (e) => {
    setUpdateTA(e.target.value.split(/\r\n|\r|\n/))
    console.log('updateTA', updateTA)
  }

  return (
    <Wrapper>
      <ListWrapper>
        <StyledTextField
          disabled={true}
          id="outlined-basic"
          label="조교 목록"
          multiline
          rows={20}
          variant="outlined"
          placeholder="학번을 입력하세요."
          value={currentTA.join('\r\n')}
          onChange={handleChangeCurTA}
        />
        <IconWrapper>
          <ArrowIcon />
        </IconWrapper>
        <StyledTextField value={updateTA.join('\r\n')} id="outlined-basic" label="수정 목록" multiline rows={20} variant="outlined" placeholder="학번을 입력하세요." onChange={handleChangeUpdateTA} />
      </ListWrapper>
      <BtnWrapper>
        <div style={{ textAlign: 'end' }}>
          <button id="submit-btn" onClick={handleDeleteTA}>
            제거
          </button>
        </div>
        <div style={{ textAlign: 'end' }}>
          <button id="submit-btn" onClick={handleAddTa}>
            추가
          </button>
        </div>
      </BtnWrapper>
    </Wrapper>
  )
}

export default TAManagement

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 10px 10px;
  border: 1px solid ${(props) => props.theme.SUB_BORDER};
  background: ${(props) => props.theme.INPUT_BACKGROUND};
  border-radius: 5px;
`

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`

const BtnWrapper = styled.div`
  padding-top: 5px;
  padding-right: 5px;
  display: flex;
  justify-content: flex-end;
`

const ArrowIcon = styled(ArrowBackIcon)`
  padding: 4px;

  && {
    font-size: 1.8rem;
  }
  path {
    color: ${(props) => props.theme.POINT};
  }
`

const StyledTextField = styled(TextField)`
  && {
    /* width: 100%; */
    background: ${(props) => props.theme.BACKGROUND};
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
