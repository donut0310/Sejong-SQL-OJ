import React, { useState } from 'react'
import styled from 'styled-components'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import FileInput from './FileInput'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

const TestcaseInput = () => {
  const [tcId, setTcId] = useState(1)
  const [fileForms, setfileForms] = useState([{ id: 1, component: FileInput }])
  const [inputs, setInputs] = useState([{}])
  const [outputs, setOutputs] = useState([{}])

  const handleAddTC = () => {
    setfileForms([...fileForms, { id: tcId + 1, component: FileInput }])
    setTcId(tcId + 1)
  }

  const filterByID = (array, index) => () => {
    const filtered = []
    for (let i = 0; i < array.length; i++) {
      const obj = array[i]
      if (obj.id !== index) {
        filtered.push(obj)
      }
    }
    return filtered
  }

  const handleDeleteTC = (index) => () => {
    console.log('INDEX: ', index)
    const inputList = filterByID(inputs, index)
    const outputList = filterByID(outputs, index)
    const tmpFileForm = filterByID(fileForms, index)
    setInputs(inputList)
    setOutputs(outputList)
    setfileForms(tmpFileForm)
  }

  return (
    <Wrapper>
      <TitleContainer>
        테스트케이스 추가
        <StyledAddBtn onClick={handleAddTC} />
      </TitleContainer>
      <FileContainer>
        {fileForms.map((f, i) => (
          <div key={i}>
            {fileForms.length === 1 ? (
              <></>
            ) : (
              <div id="delete-div" style={{ width: '100%', textAlign: 'end' }}>
                <StyledDeleteBtn onClick={handleDeleteTC(f.id)} />
              </div>
            )}
            <FileInput tcId={tcId} testcnt={f.id} inputs={inputs} outputs={outputs} setInputs={setInputs} setOutputs={setOutputs} />
          </div>
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
