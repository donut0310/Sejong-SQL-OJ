import React from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment'

const AdminTable = ({ user, problemList }) => {
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
          <li id="content" style={{ width: '7% ' }}>
            번호
          </li>
          <li id="content" style={{ width: '30%' }}>
            제목
          </li>
          <li id="content" style={{ width: '20%' }}>
            Start
          </li>
          <li id="content" style={{ width: '20%' }}>
            End
          </li>
          <li id="content" style={{ width: '15%' }}>
            Status
          </li>
          <li id="content" style={{ width: '8%' }}>
            공개
          </li>
        </ul>
        {problemList.map((problem, i) => {
          if (i === problemList.length - 1) {
            return (
              <ul id="content-list-last" key={i}>
                <li id="content" style={{ width: '7%' }}>
                  {problem.p_id}
                </li>
                <li id="content" style={{ width: '30%' }}>
                  <button
                    id="problem"
                    onClick={() => {
                      handleProblemName(problem.p_id)
                    }}
                  >
                    {problem.title}
                  </button>
                </li>
                <li id="content" style={{ width: '20%' }}>
                  {parseDateTime(problem.start_time)}
                </li>
                <li id="content" style={{ width: '20%' }}>
                  {parseDateTime(problem.end_time)}
                </li>
                <li id="content" style={{ width: '15%' }}>
                  <StyledButton
                    onClick={() => {
                      handleStatus(problem.p_id)
                    }}
                  >
                    Status
                  </StyledButton>
                </li>
                <li id="content" style={{ width: '8%' }}>
                  {problem.is_public === 1 ? <p style={{ fontSize: '0.8rem' }}>O</p> : <p style={{ fontSize: '0.8rem' }}>X</p>}
                </li>
              </ul>
            )
          } else
            return (
              <ul id="content-list" key={i}>
                <li id="content" style={{ width: '7%' }}>
                  {problem.p_id}
                </li>
                <li id="content" style={{ width: '30%' }}>
                  <button
                    id="problem"
                    onClick={() => {
                      handleProblemName(problem.p_id)
                    }}
                  >
                    {problem.title}
                  </button>
                </li>
                <li id="content" style={{ width: '20%' }}>
                  {parseDateTime(problem.start_time)}
                </li>
                <li id="content" style={{ width: '20%' }}>
                  {parseDateTime(problem.end_time)}
                </li>
                <li id="content" style={{ width: '15%' }}>
                  <StyledButton
                    onClick={() => {
                      handleStatus(problem.p_id)
                    }}
                  >
                    Status
                  </StyledButton>
                </li>
                <li id="content" style={{ width: '8%' }}>
                  {problem.is_public === 1 ? <p style={{ fontSize: '0.8rem' }}>O</p> : <p style={{ fontSize: '0.8rem' }}>X</p>}
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

export default connect(mapStateToProps)(AdminTable)

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
