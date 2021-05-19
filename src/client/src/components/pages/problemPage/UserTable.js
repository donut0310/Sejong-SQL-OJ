import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'

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
    const dateTime = new Date(data)
    return dateTime.toISOString().substr(0, 19).replace('T', ' ')
  }

  return (
    <Container>
      <ul id="table-list">
        <ul id="title-tab">
          <li id="content" style={{ width: '10%' }}>
            번호
          </li>
          <li id="content" style={{ width: '20%' }}>
            제목
          </li>
          <li id="content" style={{ width: '5%' }}>
            제출
          </li>
          <li id="content" style={{ width: '10%' }}>
            점수
          </li>
          <li id="content" style={{ width: '22.5%' }}>
            Start
          </li>
          <li id="content" style={{ width: '22.5%' }}>
            End
          </li>
          <li id="content" style={{ width: '10%' }}>
            Status
          </li>
        </ul>

        {problemList.map((problem, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '10%' }}>
              {problem.p_id}
            </li>
            <li id="content" style={{ width: '20%' }}>
              <button
                id="problem"
                onClick={() => {
                  handleProblemName(problem.p_id)
                }}
              >
                {problem.title}
              </button>
            </li>
            <li id="content" style={{ width: '5%' }}>
              {/* 사용자 제출 횟수 가져와야함 */}
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
            <li id="content" style={{ width: '22.5%' }}>
              {parseDateTime(problem.start_time)}
            </li>
            <li id="content" style={{ width: '22.5%' }}>
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
        ))}
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
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
