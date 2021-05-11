import { Grid, TextField } from '@material-ui/core'
import styled from 'styled-components'
import React from 'react'

const TimeInput = () => {
  const handleDateTimeChange = (e) => {
    console.log('Date & Time: ' + `${e.target.value}`)
  }
  return (
    // TODO Time limit INFINITE 추가
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <p style={{ fontSize: '1.2em', fontWeight: '600', margin: '25px 0 10px 0' }}>시작 일시 설정</p>
          <StyledTimePicker
            id="datetime-local"
            type="datetime-local"
            label="Start Time"
            variant="outlined"
            onChange={handleDateTimeChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <p style={{ fontSize: '1.2em', fontWeight: '600', margin: '25px 0 10px 0' }}>마감 일시 설정</p>
          <StyledTimePicker
            id="datetime-local"
            type="datetime-local"
            label="End Time"
            variant="outlined"
            onChange={handleDateTimeChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default TimeInput

const StyledTimePicker = styled(TextField)`
  && {
    width: 100%;
    margin-top: 10px;
    box-sizing: border-box;
    background: ${(props) => props.theme.INPUT_BACKGROUND};
    border-radius: 5px;
  }
  .MuiInputBase-input {
    color: ${(props) => props.theme.GENERAL_FONT};
  }
  .MuiInputLabel-formControl {
    color: ${(props) => props.theme.GENERAL_FONT};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.POINT};
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.POINT};
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: 1.5px solid ${(props) => props.theme.SUB_BORDER};
  }
`
