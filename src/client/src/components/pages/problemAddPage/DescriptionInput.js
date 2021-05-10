import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Preview from './Preview'
import ContentInput from './ContentInput'
import TableInput from './TableInput'

const DescriptionInput = () => {
  const [content, setContent] = useState('')
  const [tableInfo, setTableInfo] = useState([])

  const handleApplyContent = () => {}
  const handleApplyTable = () => {}

  return (
    <Wrapper>
      <TitleContainer>문제 내용</TitleContainer>
      <Preview content={content} tableInfo={tableInfo} />
      <ContentInput content={content} setContent={setContent} />
      <ApplyBtn onClick={handleApplyContent}>적용</ApplyBtn>
      <TableInput tableInfo={tableInfo} setTableInfo={setTableInfo} />
      <ApplyBtn onClick={handleApplyTable}>적용</ApplyBtn>
    </Wrapper>
  )
}

export default DescriptionInput

const Wrapper = styled.div`
  border: 1px solid blue;
`

const TitleContainer = styled.div`
  margin: 25px 0 10px 0;
  font-size: 1.2em;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const ApplyBtn = styled.div`
  border: 3px solid pink;
`
