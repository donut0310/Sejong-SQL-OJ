import React from 'react'
import styled from 'styled-components'

const Title = ({ problemInfo }) => {
  const currentDate = '2021-03-03 12:21:30'

  return (
    <TitleWrapper>
      <ClassName>{problemInfo.classInfo}</ClassName>
      <WeekName>{problemInfo.weekInfo}</WeekName>
      {problemInfo.problemInfo && <ProblemName>문제: {problemInfo.problemInfo}</ProblemName>}
      <TimeWrapper>
        <StartTime>StartTime: {problemInfo.startTime}</StartTime>
        <EndTime>EndTime: {problemInfo.endTime}</EndTime>
      </TimeWrapper>
      <CurrentTime>CurrentTime: {currentDate}</CurrentTime>
    </TitleWrapper>
  )
}

export default Title

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  border: 1px solid blue;
  margin-bottom: 40px;
`

const ClassName = styled.div`
  font-size: 1.7rem;
  padding: 10px;
`
const WeekName = styled.div`
  font-size: 1.5rem;
  padding: 10px;
`

const ProblemName = styled.div`
  font-size: 1.3rem;
  padding: 10px;
`
const TimeWrapper = styled.div`
  display: flex;
  padding: 10px;
`
const StartTime = styled.div`
  font-size: 1rem;
  padding: 10px;
`
const EndTime = styled.div`
  font-size: 1rem;
  padding: 10px;
`
const CurrentTime = styled.div``
