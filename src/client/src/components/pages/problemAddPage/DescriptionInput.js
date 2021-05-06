import React, { useState } from 'react'
import styled from 'styled-components'
import ContentInput from './ContentInput'
import DynamicTable from './DynamicTable'

// TODO 내용, 테이블 삭제도 가능해야하나..

const DescriptionInput = () => {
  const [content, setContent] = useState([])

  const handleAddTable = () => {
    console.log('Add Example table')
    setContent([...content, DynamicTable])
  }
  const handleAddContent = () => {
    console.log('Add content input')
    setContent([...content, ContentInput])
  }

  const mapContent = (data) => {
    return data.map((content, i) => {
      if (content === DynamicTable) return <DynamicTable key={i} />
      else return <ContentInput key={i} />
    })
  }

  return (
    <div>
      <TitleContainer>
        문제 내용
        <div>
          <button id="submit-btn" style={{ width: '90px' }} onClick={handleAddContent}>
            내용 추가
          </button>
          <button id="submit-btn" style={{ width: '90px' }} onClick={handleAddTable}>
            테이블 추가
          </button>
        </div>
      </TitleContainer>
      <div>{mapContent(content)}</div>
    </div>
  )
}

export default DescriptionInput

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
