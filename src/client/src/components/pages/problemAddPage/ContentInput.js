import React, { forwardRef } from 'react'
import styled from 'styled-components'

const ContentInput = forwardRef((props, ref) => {
  return (
    <div>
      <StyledInput type="text" placeholder="내용을 입력하세요." ref={ref} />
    </div>
  )
})

export default ContentInput

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
