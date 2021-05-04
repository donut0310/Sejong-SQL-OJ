import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import PublishIcon from '@material-ui/icons/Publish'
import { Grid } from '@material-ui/core'
import { useDropzone } from 'react-dropzone'

const TestcaseInput = () => {
  const [TCcnt, setTCcnt] = useState(1)
  const [testcase, setTestcase] = useState([{ inputFile: '', outputFile: '' }])
  const handleAddTC = () => {
    setTCcnt(TCcnt + 1)
  }

  const onDrop = useCallback((acceptedFile) => {
    setTestcase(acceptedFile[0])
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div>
      <TitleContainer>
        테스트케이스 추가
        <AddCircleOutlineRoundedIcon onClick={handleAddTC} />
      </TitleContainer>
      <GridContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <p style={{ fontWeight: '600' }}>Input</p>
            <StyledUploadContainer {...getRootProps()}>
              <input {...getInputProps()} accept=".sql" />
              <Message>
                <StyledBoxIcon />
                <p>업로드</p>
              </Message>
            </StyledUploadContainer>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p style={{ fontWeight: '600' }}>Output</p>
            <StyledUploadContainer {...getRootProps()}>
              <input {...getInputProps()} accept=".sql" />
              <Message>
                <StyledBoxIcon />
                <p>업로드</p>
              </Message>
            </StyledUploadContainer>
          </Grid>
        </Grid>
      </GridContainer>
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

const GridContainer = styled.div`
  border: none;
  border-radius: 5px;
  width: 100%;
  background: ${(props) => props.theme.EDITOR_BACKGROUND};
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
  background: ${(props) => props.theme.BACKGROUND};
  border: 1px dashed ${(props) => props.theme.MAIN_BORDER};
  &:hover {
    border: 1px dashed ${(props) => props.theme.MAIN_BORDER};
    background: ${(props) => props.theme.BOARD_LIST_HOVER};
    cursor: pointer;
  }
`

const StyledBoxIcon = styled(PublishIcon)`
  && {
    margin: 5px;
    font-size: 1.2em;

    color: ${(props) => props.theme.secondaryColor};
  }
`
const Message = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  p {
    margin-top: 3px;
  }
`
