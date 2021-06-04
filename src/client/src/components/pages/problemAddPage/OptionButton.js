import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { Grid, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

const OptionButton = ({ isPublic, setIsPublic, handleCancel, handleSubmit }) => {
  const RedRadio = withStyles({
    root: {
      color: '#B41313',
      '&$checked': {
        color: '#a80c0c',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />)

  const handleChange = (e) => {
    setIsPublic(e.target.value)
    console.log('Public? ', `${e.target.value}`)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <RadioContainer aria-label="isPublic" name="isPubic" value={isPublic} onChange={handleChange}>
          <FormControlLabel value={1} control={<RedRadio />} label="공개" />
          <FormControlLabel value={0} control={<RedRadio />} label="비공개" />
        </RadioContainer>
      </Grid>
      <Grid item xs={12} sm={6} style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleCancel}>
          취소
        </button>
        <button id="submit-btn" onClick={handleSubmit}>
          등록
        </button>
      </Grid>
    </Grid>
  )
}

export default OptionButton

const RadioContainer = styled(RadioGroup)`
  && {
    display: inline;
  }
`
