import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Preview = ({ description }) => {
  return (
    <Wrapper id="preview-wrapper">
      <span style={{ paddingTop: '5px', fontWeight: '500' }}>미리보기</span>
      {description === '' ? <ContentWrapper>내용이 표시됩니다.</ContentWrapper> : <ContentWrapper>{description}</ContentWrapper>}
      {console.log('Description => ' + '\n' + description)}
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
  padding: 15px;
  border-radius: 5px;
  background: ${(props) => props.theme.BOARD_LIST_HOVER};
`
