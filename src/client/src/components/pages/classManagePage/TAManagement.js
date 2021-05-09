import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const TAManagement = () => {
  const [TA, setTA] = useState()
  const handleChangeTA = (e) => {
    setTA(e.target.value)
    console.log(e.target.value)
  }
  const handleSaveTA = () => {
    // post
    console.log('TA List saved')
  }
  return (
    <div>
      <StyledInput type="text" placeholder="학번을 입력하세요." value={TA} onChange={handleChangeTA}></StyledInput>
      <div style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleSaveTA}>
          저장
        </button>
      </div>
    </div>
  )
}

export default TAManagement

const StyledInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: none;
  background: ${(props) => props.theme.BOARD_LIST_HOVER};
  color: ${(props) => props.theme.GENERAL_FONT};
  border: none;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    background: ${(props) => props.theme.BOARD_TITLE};
  }
  &:focus {
    outline: 0;
  }
`
