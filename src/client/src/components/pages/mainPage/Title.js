import React, { useState } from 'react'
import styled from 'styled-components'

const Title = () => {
  const [weekInfo, setWeekInfo] = useState('1')

  return (
    <Container>
      <div className="title">{weekInfo}주차: My Contents</div>
      <div className="time">Current time: 2021-03-04 15:29:22</div>
    </Container>
  )
}

export default Title

const Container = styled.div`
  div.title {
    font-size: 2em;
    font-weight: 500;
    margin: 15px;
  }
  div.time {
    font-size: 1.5em;
  }
  text-align: center;
  padding: 20px;
`
