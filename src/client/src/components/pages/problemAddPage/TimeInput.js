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
            defaultValue="2021-03-24T10:30"
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
            defaultValue="2021-03-24T10:30"
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
    background: ${(props) => props.theme.BOARD_LIST_HOVER};
    padding: 2px 10px;
    border-radius: 5px;
    box-sizing: border-box;
  }
  #datetime-local {
    color: ${(props) => props.theme.GENERAL_FONT};
  }
`
