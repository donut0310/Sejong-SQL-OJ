import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import moment from 'moment'

const UserTable = ({ problemList, user }) => {
  const history = useHistory()
  const { classId, weekId } = useParams()

  const handleProblemName = (pId) => {
    history.push(`/${classId}/${weekId}/problem/${pId}`)
  }

  const handleStatus = (pId) => {
    history.push(`/${classId}/${weekId}/status?userId=${user.user_id}&pId=${pId}`)
  }
  const parseDateTime = (data) => {
    const dateTime = new Date(data).toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
    return moment(dateTime).format('YYYY-MM-DD HH:mm:ss')
  }

  return (
    <Container>
      <ul id="table-list">
        <ul id="title-tab">
          <li id="content" style={{ width: '7.5%' }}>
            번호
          </li>
          <li id="content" style={{ width: '28%' }}>
            제목
          </li>
          <li id="content" style={{ width: '7.5%' }}>
            제출
          </li>
          <li id="content" style={{ width: '10%' }}>
            점수
          </li>
          <li id="content" style={{ width: '19%' }}>
            Start
          </li>
          <li id="content" style={{ width: '19%' }}>
            End
          </li>
          <li id="content" style={{ width: '10%' }}>
            Status
          </li>
        </ul>

        {problemList.map((problem, i) => {
          if (i === problemList.length - 1) {
            return (
              <ul id="content-list-last" key={i}>
                <li id="content" style={{ width: '7.5%' }}>
                  {problem.p_id}
                </li>
                <li id="content" style={{ width: '28%' }}>
                  <button
                    id="problem"
                    onClick={() => {
                      handleProblemName(problem.p_id)
                    }}
                  >
                    {problem.title}
                  </button>
                </li>
                <li id="content" style={{ width: '7.5%' }}>
                  {problem.submit_cnt}
                </li>
                <li id="content" style={{ width: '10%' }}>
                  {problem.score === 100 ? (
                    <>
                      <span style={{ color: 'green' }}>{problem.score}</span> / 100
                    </>
                  ) : (
                    <>
                      <span style={{ color: 'red' }}>{problem.score}</span> / 100
                    </>
                  )}
                </li>
                <li id="content" style={{ width: '19%' }}>
                  {parseDateTime(problem.start_time)}
                </li>
                <li id="content" style={{ width: '19%' }}>
                  {parseDateTime(problem.end_time)}
                </li>
                <li id="content" style={{ width: '10%' }}>
                  <StyledButton
                    onClick={() => {
                      handleStatus(problem.p_id)
                    }}
                  >
                    Status
                  </StyledButton>
                </li>
              </ul>
            )
          } else
            return (
              <ul id="content-list" key={i}>
                <li id="content" style={{ width: '7.5%' }}>
                  {problem.p_id}
                </li>
                <li id="content" style={{ width: '28%' }}>
                  <button
                    id="problem"
                    onClick={() => {
                      handleProblemName(problem.p_id)
                    }}
                  >
                    {problem.title}
                  </button>
                </li>
                <li id="content" style={{ width: '7.5%' }}>
                  {problem.submit_cnt}
                </li>
                <li id="content" style={{ width: '10%' }}>
                  {problem.score === 100 ? (
                    <>
                      <span style={{ color: 'green' }}>{problem.score}</span> / 100
                    </>
                  ) : (
                    <>
                      <span style={{ color: 'red' }}>{problem.score}</span> / 100
                    </>
                  )}
                </li>
                <li id="content" style={{ width: '19%' }}>
                  {parseDateTime(problem.start_time)}
                </li>
                <li id="content" style={{ width: '19%' }}>
                  {parseDateTime(problem.end_time)}
                </li>
                <li id="content" style={{ width: '10%' }}>
                  <StyledButton
                    onClick={() => {
                      handleStatus(problem.p_id)
                    }}
                  >
                    Status
                  </StyledButton>
                </li>
              </ul>
            )
        })}
      </ul>
    </Container>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}

export default connect(mapStateToProps)(UserTable)

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledButton = styled.button`
  border: none;
  color: blue;
  background: none;
  font-size: 0.8rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
