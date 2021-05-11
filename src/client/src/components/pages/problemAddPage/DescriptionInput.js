import React, { useState } from 'react'
import styled from 'styled-components'
import Preview from './Preview'
import ContentInput from './ContentInput'
import TableInput from './TableInput'

const DescriptionInput = () => {
  const [description, setDescription] = useState('')

  const [contentInput, setContentInput] = useState('')
  const [tableInput, setTableInput] = useState('')

  const handleApplyContent = () => {
    setDescription(description + contentInput + '\n')
    setContentInput('')
  }
  const handleApplyTable = () => {
    // TODO setDescription()
  }

  return (
    <Wrapper>
      <TitleContainer>문제 내용</TitleContainer>
      <Preview description={description} />
      <ContentInput contentInput={contentInput} setContentInput={setContentInput} />
      <div style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleApplyContent}>
          적용
        </button>
      </div>
      <TableInput tableInput={tableInput} setTableInput={setTableInput} />
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
