import React, { useState } from 'react'
import styled from 'styled-components'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { Grid } from '@material-ui/core'

const TestcaseInput = () => {
  const [id, setId] = useState(1)
  const [testcases, setTestcases] = useState([
    {
      id: `${id}`,
      inputFile: '',
      outputFile: '',
    },
  ])

  const handleAddTC = () => {
    setId(id + 1)
    setTestcases([...testcases, { id: `${id}`, inputFile: '', outputFile: '' }])
    console.log('Add Testcase', id)
  }

  const handleDeleteTC = (tcID) => () => {
    const tcList = testcases.filter((tc) => tc.id !== tcID)
    setTestcases(tcList)
  }

  // TODO setTestcases(input, output file)
  const handleInputUpload = (e) => {
    console.log('input file: ', e.target.value)
  }

  const handleOutputUpload = (e) => {
    console.log('output file: ', e.target.value)
  }

  return (
    <Wrapper>
      <TitleContainer>
        테스트케이스 추가
        <StyledAddBtn onClick={handleAddTC} />
      </TitleContainer>
      <FileContainer>
        {testcases.map((testcase, i) => (
          <div id="testcase" key={i} style={{ margin: '10px 0' }}>
            {testcases.length === 1 ? (
              <></>
            ) : (
              <div id="delete-div" style={{ width: '100%', textAlign: 'end' }}>
                <StyledDeleteBtn onClick={handleDeleteTC(testcase.id)} />
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

        {console.log('TC LIST=> ', testcases)}
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
