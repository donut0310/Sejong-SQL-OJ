import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import ContentInput from './ContentInput'
import DynamicTable from './DynamicTable'

const DescriptionInput = () => {
  const textInput = useRef() // 텍스트 내용 가져오는 ref 변수

  const [description, setDescription] = useState([]) // 문제 내용 저장하는 변수

  const [renderingContent, setRenderingContent] = useState([]) // 단순 컴포넌트 매핑하기 위한 배열

  const handleAddTable = () => {
    console.log('Add Example table')
    setRenderingContent([...renderingContent, DynamicTable])
  }
  const handleAddContent = () => {
    console.log('Add Content input')
    setRenderingContent([...renderingContent, ContentInput])
  }

  const handleSaveDesc = () => {
    setDescription([...description, textInput.current.value])
  }

  const mapContent = (data) => {
    return data.map((content, i) => {
      if (content === DynamicTable) return <DynamicTable key={i} />
      else
        return (
          <div key={i}>
            <ContentInput ref={textInput} />
            <button id="submit-btn" onClick={handleSaveDesc}>
              SAVE
            </button>
            {description}
          </div>
        )
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
      <div>{mapContent(renderingContent)}</div>
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
