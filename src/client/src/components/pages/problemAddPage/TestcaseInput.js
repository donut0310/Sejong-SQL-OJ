import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import PublishIcon from '@material-ui/icons/Publish'
import { Grid } from '@material-ui/core'

const TestcaseInput = () => {
  const [tcCnt, setTcCnt] = useState(1)
  const [testcases, setTestcases] = useState([])

  const handleAddTC = () => {
    setTcCnt(tcCnt + 1)
    setTestcases([...testcases, { count: `${tcCnt}`, inputFile: '', outputFile: '' }])
  }

  const handleDeleteTC = (e) => {
    console.log(e.target.id)
  }

  // TODO Testcase 업로드한 파일명 표시
  return (
    <div>
      <TitleContainer>
        테스트케이스 추가
        <StyledAddBtn onClick={handleAddTC} />
      </TitleContainer>
      <FileContainer>
        {testcases.map((testcase, i) => (
          <div id="testcase" key={i} style={{ marginBottom: '15px' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
              <StyledDeleteBtn id={testcase.count} onClick={handleDeleteTC} />
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <p style={{ fontWeight: '600' }}>Input {testcase.count}</p>
                <StyledUploadContainer>
                  <label htmlFor="input-file">
                    <StyledUploadIcon />
                    <p>업로드</p>
                  </label>
                  <input type="file" id="input-file" accept=".sql" />
                </StyledUploadContainer>
              </Grid>
              <Grid item xs={12} sm={6}>
                <p style={{ fontWeight: '600' }}>Output {testcase.count}</p>
                <StyledUploadContainer>
                  <label htmlFor="output-file">
                    <StyledUploadIcon />
                    <p>업로드</p>
                  </label>
                  <input type="file" id="output-file" accept=".json" />
                </StyledUploadContainer>
              </Grid>
            </Grid>
          </div>
        ))}
      </FileContainer>
    </div>
  )
}

export default TestcaseInput

const TitleContainer = styled.div`
  margin-top: 10px;
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
  margin: 10px 0;
  padding: 15px;
  box-sizing: border-box;
`

const StyledUploadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 5px 0;
  background: ${(props) => props.theme.BOARD_TITLE};
  border: 1px dashed ${(props) => props.theme.MAIN_BORDER};
  cursor: pointer;
  &:hover {
    border: 1px dashed ${(props) => props.theme.MAIN_BORDER};
    background: ${(props) => props.theme.SUB_BORDER};
  }
  label {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    p {
      margin-top: 3px;
    }
  }
  // input[type='file'] {
  //   position: absolute;
  //   width: 1px;
  //   height: 1px;
  //   padding: 0;
  //   margin: -1px;
  //   overflow: hidden;
  //   clip: rect(0, 0, 0, 0);
  //   border: 0;
  // }
`
const StyledUploadIcon = styled(PublishIcon)`
  && {
    margin: 5px;
    font-size: 1.2em;
    color: ${(props) => props.theme.secondaryColor};
  }
`
