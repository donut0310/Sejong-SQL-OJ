import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const FileInput = ({ testcases }) => {
  const input = useRef()
  const output = useRef()
  const [printIn, setPrintIn] = useState([])
  const [printOut, setPrintOut] = useState([])

  const handleUpload = (e) => {
    e.preventDefault()
    testcases.append('Input', input.current.files[0])
    testcases.append('Output', output.current.files[0])
    setPrintIn(testcases.getAll('Input'))
    setPrintOut(testcases.getAll('Output'))
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TitleContainer style={{ margin: '0' }}>
            <Arrow />
            Input
          </TitleContainer>
          <StyledUploadContainer id={1} type="file" id="input-file" accept=".sql" ref={input} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TitleContainer style={{ margin: '0' }}>
            <Arrow />
            Output
          </TitleContainer>
          <StyledUploadContainer id={2} type="file" id="output-file" accept=".json" ref={output} />
          <div style={{ width: '100%', textAlign: 'end' }}>
            <button id="submit-btn" onClick={handleUpload}>
              추가
            </button>
          </div>
        </Grid>
      </Grid>
      {printIn.length === 0 ? (
        <></>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TitleContainer>
              <Arrow />
              업로드 된 Input 파일
            </TitleContainer>
            {printIn.map((input, i) => (
              <FileNameContainer key={i}>{input.name}</FileNameContainer>
            ))}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TitleContainer>
              <Arrow />
              업로드 된 Output 파일
            </TitleContainer>
            {printOut.map((output, j) => (
              <FileNameContainer key={j}>{output.name}</FileNameContainer>
            ))}
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default FileInput

const StyledUploadContainer = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 5px 0;
  padding: 10px;
  background: ${(props) => props.theme.HEADER_BACKGROUND};
  border: 1px dashed ${(props) => props.theme.MAIN_BORDER};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.BOARD_LIST_HOVER};
    border: 1px solid ${(props) => props.theme.POINT};
  }
`
const FileNameContainer = styled.div`
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.SUB_BORDER};
  margin: 10px;
  padding: 10px;
  background: ${(props) => props.theme.BACKGROUND};
`

const TitleContainer = styled.div`
  margin: 10px 0;
  font-size: 1em;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
`

const Arrow = styled(ArrowForwardIosIcon)`
  && {
    width: 0.5em;
    margin-right: 5px;
    margin-bottom: 5px;
  }
`
