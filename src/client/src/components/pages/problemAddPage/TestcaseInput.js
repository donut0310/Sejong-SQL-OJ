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
  const [testcases, setTestcases] = useState([])

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

  // TESTCASE 출력해보면 입력된 만큼 다 들어가있음, 삭제된 건 잘 삭제됐고
  // 근데 문제는 파일 입력하는 곳에 이름이 이상하게 써있음 !! 개 짜 증 나 !!
  const handleTestcaseSubmit = () => {
    if (inputs.length !== outputs.length) alert('파일을 모두 업로드 해주세요.')
    else {
      for (let i = 0; i < inputs.length - 1; i++) {
        // setTestcases 함수 안쓰고 push 써도 되는지 몰으겠음 ㅎㅎ ;;
        testcases.push({ id: i + 1, inputFile: inputs[i + 1].inputFile, outputFile: outputs[i + 1].outputFile })
      }
    }
    console.log('TESTCASES => ', testcases)
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
            <FileInput tcId={f.id} testcnt={f.id} inputs={inputs} outputs={outputs} setInputs={setInputs} setOutputs={setOutputs} />
          </div>
        ))}
      </FileContainer>
      {/* 테스트케이스 데이터 확인용 버튼 */}
      <button id="submit-btn" style={{ width: '150px' }} onClick={handleTestcaseSubmit}>
        TESTCASE 적용 test
      </button>
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
