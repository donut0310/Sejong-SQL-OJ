import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

const FileInput = ({ tcId, testcnt, inputs, outputs, setInputs, setOutputs }) => {
  const handleInput = (e) => {
    setInputs([...inputs, { id: tcId, inputFile: e.target.value }])
  }

  const handleOutput = (e) => {
    setOutputs([...outputs, { id: tcId, outputFile: e.target.value }])
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <p style={{ fontWeight: '600' }}>Input {testcnt}</p>
          <StyledUploadContainer type="file" id="input-file" accept=".sql" onChange={handleInput} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ fontWeight: '600' }}>Output {testcnt}</p>
          <StyledUploadContainer type="file" id="output-file" accept=".json" onChange={handleOutput} />
        </Grid>
      </Grid>
      {console.log('input: ', inputs, 'output: ', outputs)}
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
  background: ${(props) => props.theme.BOARD_TITLE};
  border: 1px dashed ${(props) => props.theme.MAIN_BORDER};
  cursor: pointer;
  &:hover {
    border: 1px dashed ${(props) => props.theme.MAIN_BORDER};
    background: ${(props) => props.theme.SUB_BORDER};
  }
`
