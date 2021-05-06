import React, { useState } from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { Grid, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

const OptionButton = () => {
  const RedRadio = withStyles({
    root: {
      color: '#B41313',
      '&$checked': {
        color: '#a80c0c',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />)

  const [isPublic, setIsPublic] = useState(false)
  const handleChange = (e) => {
    setIsPublic(e.target.value)
    console.log('Public? ' + `${e.target.value}`)
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <RadioContainer aria-label="isPublic" name="isPubic" value={isPublic} onChange={handleChange}>
          <FormControlLabel value="true" control={<RedRadio />} label="공개" />
          <FormControlLabel value="false" control={<RedRadio />} label="비공개" />
        </RadioContainer>
      </Grid>
      <Grid item xs={12} sm={6} style={{ textAlign: 'end' }}>
        <button id="submit-btn">취소</button>
        <button id="submit-btn">등록</button>
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
