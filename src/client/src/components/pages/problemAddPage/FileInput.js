import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const FileInput = ({ formData }) => {
  const input = useRef()
  const output = useRef()
  const [printIn, setPrintIn] = useState([])
  const [printOut, setPrintOut] = useState([])
  const [isSql, setIsSql] = useState(false)
  const [isJson, setIsJson] = useState(false)

  const handleUpload = (e) => {
    e.preventDefault()
    if (isSql && isJson) {
      if (input.current.files.length !== 0 && output.current.files.length !== 0) {
        formData.append(`I${printIn.length}`, input.current.files[0])
        formData.append(`O${printOut.length}`, output.current.files[0])

        setPrintIn([...printIn, input.current.files[0]])
        setPrintOut([...printOut, output.current.files[0]])
      } else alert('파일을 입력해주세요.')
    } else alert('파일 확장자를 확인해주세요.')
  }

  const SQLFileSelected = () => {
    let pathpoint = input.current.files[0].name.lastIndexOf('.')
    let filepoint = input.current.files[0].name.substring(pathpoint + 1, input.current.files[0].name.length)
    let filetype = filepoint.toLowerCase()
    if (filetype == 'sql') {
      setIsSql(true)
    } else {
      alert('.sql 형식의 파일만 업로드해주세요.')
      setIsSql(false)
    }
  }

  const JSONFileSelected = () => {
    let pathpoint = output.current.files[0].name.lastIndexOf('.')
    let filepoint = output.current.files[0].name.substring(pathpoint + 1, output.current.files[0].name.length)
    let filetype = filepoint.toLowerCase()
    if (filetype == 'json') {
      setIsJson(true)
    } else {
      alert('.json 형식의 파일만 업로드해주세요.')
      setIsJson(false)
    }
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TitleContainer style={{ margin: '0' }}>
            <Arrow />
            Input
          </TitleContainer>
          <StyledUploadContainer type="file" id="input-file" accept=".sql" onChange={SQLFileSelected} ref={input} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TitleContainer style={{ margin: '0' }}>
            <Arrow />
            Output
          </TitleContainer>
          <StyledUploadContainer type="file" id="output-file" accept=".json" onChange={JSONFileSelected} ref={output} />
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
