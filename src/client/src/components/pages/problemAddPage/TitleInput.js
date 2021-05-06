import React from 'react'
import styled from 'styled-components'

const TitleInput = () => {
  const handleTitleChange = (e) => {
    console.log('title: ' + `${e.target.value}`)
  }
  return (
    <div>
      <p style={{ fontSize: '1.2em', fontWeight: '600' }}>문제 제목</p>
      <StyledInput type="text" placeholder="제목을 입력하세요." autoFocus onChange={handleTitleChange}></StyledInput>
    </div>
  )
}

export default TitleInput

const StyledInput = styled.input`
  width: 100%;
  background: ${(props) => props.theme.BOARD_LIST_HOVER};
  color: ${(props) => props.theme.GENERAL_FONT};
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
  &:hover {
    background: ${(props) => props.theme.BOARD_TITLE};
  }
  &:focus {
    outline: 0;
  }
`
