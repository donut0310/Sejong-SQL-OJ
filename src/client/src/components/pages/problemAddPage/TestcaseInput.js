import React, { useState } from 'react'
import styled from 'styled-components'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import FileInput from './FileInput'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

const TestcaseInput = ({ inputs, outputs }) => {
  const [tcId, setTcId] = useState(1)
  const [fileForms, setfileForms] = useState([{ id: 1, component: FileInput }])

  const handleAddTC = () => {
    setfileForms([...fileForms, { id: tcId + 1, component: FileInput }])
    setTcId(tcId + 1)
  }

  return (
    <Wrapper>
      <TitleContainer>
        테스트케이스 추가
        <StyledAddBtn onClick={handleAddTC} />
      </TitleContainer>
      <FileContainer>
        {fileForms.map((f, i) => (
          <FileInput key={i} inputs={inputs} outputs={outputs} />
        ))}
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

const StyledAddBtn = styled(AddCircleOutlineRoundedIcon)`
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.SUB_FONT};
  }
`
const StyledDeleteBtn = styled(HighlightOffIcon)`
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.SUB_FONT};
  }
`
const FileContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  background: ${(props) => props.theme.INPUT_BACKGROUND};
  border: 1px solid ${(props) => props.theme.SUB_BORDER};
  padding: 15px;
  box-sizing: border-box;
`
