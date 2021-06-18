import React from 'react'
import styled from 'styled-components'
import Clock from 'react-live-clock'
import moment from 'moment'

const Title = ({ problemInfo }) => {
  const parseDateTime = (data) => {
    const dateTime = new Date(data).toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
    return moment(dateTime).format('YYYY-MM-DD HH:mm:ss')
  }

  return (
    <TitleWrapper>
      <ClassName>{problemInfo.className}</ClassName>
      <WeekName>{problemInfo.weekName}</WeekName>
      {problemInfo.problemName && <ProblemName>문제 : {problemInfo.problemName}</ProblemName>}
      {problemInfo.startTime ? (
        <TimeWrapper>
          {problemInfo.startTime && <EndTime>Start Time : {parseDateTime(problemInfo.startTime)}</EndTime>}
          {problemInfo.endTime && <EndTime>End Time : {parseDateTime(problemInfo.endTime)}</EndTime>}
        </TimeWrapper>
      ) : (
        <></>
      )}
      <CurrentTime>
        <Clock format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} />
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
  justify-contents: center;
  padding: 30px;
  margin-bottom: 40px;

  color: ${(props) => props.theme.GENERAL_FONT};
  background: ${(props) => props.theme.INPUT_BACKGROUND};

  border: 1.5px solid ${(props) => props.theme.SUB_BORDER};
  // border-bottom: 4px solid ${(props) => props.theme.POINT};
  // border-top: 4px solid ${(props) => props.theme.POINT};
  // border-left: 4px solid ${(props) => props.theme.POINT};
  // border-right: 4px solid ${(props) => props.theme.POINT};
  border-radius: 10px;
`

const ClassName = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  padding: 15px;
`

const WeekName = styled.div`
  font-size: 1.6rem;
  padding: 10px;
  font-weight: 600;
  margin-bottom: 10px;
`

const ProblemName = styled.div`
  font-size: 1.3rem;
  padding: 5px;
  font-weight: 600;
`

const TimeWrapper = styled.div`
  display: flex;
  padding: 10px;
`

const EndTime = styled.div`
  font-size: 1.2rem;
  padding: 10px;
  font-weight: 500;
`

const CurrentTime = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  padding-bottom: 5px;
`
