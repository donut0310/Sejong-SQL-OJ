import React, { useState } from 'react'
import styled from 'styled-components'
import Preview from './Preview'
import ContentInput from './ContentInput'
import TableInput from './TableInput'

const DescriptionInput = () => {
  const [content, setContent] = useState('')
  const [tableInfo, setTableInfo] = useState([])

  const handleApplyTable = () => {}

  return (
    <Wrapper>
      <TitleContainer>문제 내용</TitleContainer>
      <Preview content={content} tableInfo={tableInfo} />
      <ContentInput content={content} setContent={setContent} />
      <TableInput tableInfo={tableInfo} setTableInfo={setTableInfo} />
      <div style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleApplyTable}>
          적용
        </button>
      </div>
    </Wrapper>
  )
}

export default DescriptionInput

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
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
