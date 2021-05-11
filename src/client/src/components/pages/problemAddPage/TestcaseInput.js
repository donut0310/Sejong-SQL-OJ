import React, { useState } from 'react'
import styled from 'styled-components'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { Grid } from '@material-ui/core'

const TestcaseInput = () => {
  const [tcCnt, setTcCnt] = useState(1)
  const [testcases, setTestcases] = useState([
    {
      count: `${tcCnt}`,
      inputFile: '',
      outputFile: '',
    },
  ])

  const handleAddTC = () => {
    setTestcases([...testcases, { count: `${tcCnt + 1}`, inputFile: '', outputFile: '' }])
    setTcCnt(tcCnt + 1)
    console.log('Add Testcase')
  }

  // TODO delete 시 카운트 값 변화 때문에 제대로 삭제 처리가 안되고 있음
  const handleDeleteTC = (tcID) => () => {
    const tcList = testcases.filter((tc) => tc.count !== tcID)
    setTestcases(tcList)
    setTcCnt(tcCnt - 1)
  }

  // TODO setTestcases(input, output file)
  const handleInputUpload = (e) => {
    console.log('input file: ', e.target.value)
  }

  const handleOutputUpload = (e) => {
    console.log('output file: ', e.target.value)
  }

  return (
    <div>
      <TitleContainer>
        테스트케이스 추가
        <StyledAddBtn onClick={handleAddTC} />
      </TitleContainer>
      <FileContainer>
        {testcases.map((testcase, i) => (
          <div id="testcase" key={i} style={{ margin: '10px 0' }}>
            {tcCnt === 1 ? (
              <></>
            ) : (
              <div id="delete-div" style={{ width: '100%', textAlign: 'end' }}>
                <StyledDeleteBtn onClick={handleDeleteTC(testcase.count)} />
              </div>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <p style={{ fontWeight: '600' }}>Input {i + 1}</p>
                <StyledUploadContainer type="file" id="input-file" accept=".sql" onChange={handleInputUpload} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <p style={{ fontWeight: '600' }}>Output {i + 1}</p>
                <StyledUploadContainer type="file" id="output-file" accept=".json" onChange={handleOutputUpload} />
              </Grid>
            </Grid>
          </div>
        ))}

        {console.log('TC 개수: ', tcCnt)}
        {console.log('TC VALUE => ', testcases)}
      </FileContainer>
    </div>
  )
}

export default TestcaseInput

const TitleContainer = styled.div`
  margin: 25px 0 10px 0;
  font-size: 1.2em;
  font-weight: 600;
  display: flex;
  flex-direction: row;
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
  border: none;
  border-radius: 5px;
  width: 100%;
  background: ${(props) => props.theme.BOARD_LIST_HOVER};
  padding: 15px;
  box-sizing: border-box;
`

const StyledUploadContainer = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 5px 0;
  padding: 10px;
  background: ${(props) => props.theme.BOARD_TITLE};
  border: 1px dashed ${(props) => props.theme.MAIN_BORDER};
  cursor: pointer;
  &:hover {
    border: 1px dashed ${(props) => props.theme.MAIN_BORDER};
    background: ${(props) => props.theme.SUB_BORDER};
  }
`
