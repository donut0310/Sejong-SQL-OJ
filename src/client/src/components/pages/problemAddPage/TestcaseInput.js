import React from 'react'
import styled from 'styled-components'
import FileInput from './FileInput'

const TestcaseInput = ({ formData }) => {
  return (
    <Wrapper>
      <TitleContainer>테스트케이스 추가</TitleContainer>
      <FileContainer>
        <FileInput formData={formData} />
      </FileContainer>
    </Wrapper>
  )
}

export default TestcaseInput

const Wrapper = styled.div`
  margin-bottom: 60px;
`

const TitleContainer = styled.div`
  margin-bottom: 10px;
  font-size: 1.4em;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const FileContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  background: ${(props) => props.theme.INPUT_BACKGROUND};
  border: 1px solid ${(props) => props.theme.SUB_BORDER};
  padding: 15px;
  box-sizing: border-box;
`
