import React from 'react'
import styled from 'styled-components'
import Clock from 'react-live-clock'

const Title = ({ problemInfo }) => {
  return (
    <TitleWrapper>
      <ClassName>{problemInfo.className}</ClassName>
      <WeekName>{problemInfo.weekName}</WeekName>

      {problemInfo.problemName && <ProblemName>문제: {problemInfo.problemName}</ProblemName>}

      <TimeWrapper>
        {problemInfo.startTime && <EndTime>StartTime: {problemInfo.startTime}</EndTime>}
        {problemInfo.endTime && <EndTime>EndTime: {problemInfo.endTime}</EndTime>}
      </TimeWrapper>
      <CurrentTime>
        <Clock format={'YYYY년 MM월 DD 일 HH:mm:ss'} ticking={true} />
      </CurrentTime>
    </TitleWrapper>
  )
}

export default Title

// TODO
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  margin-bottom: 40px;

  color: ${(props) => props.theme.GENERAL_FONT};

  border: 1.5px solid black;
  border-radius: 10px;
  background: ${(props) => props.theme.HEADER_BACKGROUND};
`

const ClassName = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  padding: 10px;
`

const WeekName = styled.div`
  font-size: 1.6rem;
  padding: 10px;
  margin-bottom: 20px;
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
  font-size: 1.1rem;
  padding: 10px;
`

const EndTime = styled.div`
  font-size: 1.1rem;
  padding: 10px;
`

const CurrentTime = styled.div`
  /* width: 600px;
  justify-content: center;
  text-align: center;
  padding-bottom: 30px;
  border-bottom: 2px solid ${(props) => props.theme.POINT}; */
`
