import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Preview = ({ content, tableInfo }) => {
  return (
    <Wrapper id="preview-wrapper">
      <span style={{ paddingTop: '5px', fontWeight: '500' }}>미리보기</span>
      {content === '' ? <ContentWrapper>내용이 표시됩니다.</ContentWrapper> : <ContentWrapper>{content}</ContentWrapper>}
      {console.log(content)}
    </Wrapper>
  )
}

export default Preview

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`

const ContentWrapper = styled.div`
  box-sizing: border-box;
  line-height: 1.5em;
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
  background: ${(props) => props.theme.BOARD_LIST_HOVER};
`
