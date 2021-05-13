import { Grid, TextField } from '@material-ui/core'
import styled from 'styled-components'
import React from 'react'

const TimeInput = ({ setStartTime, setEndTime }) => {
  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value)
    console.log('Time Input changed', e.target.value)
  }

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value)
    console.log('Time Input changed', e.target.value)
  }

  return (
    // TODO Time limit INFINITE 추가
    <Wrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TitleContainer>시작 일시 설정</TitleContainer>
          <StyledTimePicker
            id="datetime-local"
            type="datetime-local"
            label="Start Time"
            variant="outlined"
            onChange={handleStartTimeChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TitleContainer>마감 일시 설정</TitleContainer>
          <StyledTimePicker
            id="datetime-local"
            type="datetime-local"
            label="End Time"
            variant="outlined"
            onChange={handleEndTimeChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default TimeInput

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
