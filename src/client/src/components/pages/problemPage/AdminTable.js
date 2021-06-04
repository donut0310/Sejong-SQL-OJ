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
          <li id="content" style={{ width: '10%' }}>
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
          <li id="content" style={{ width: '10%' }}>
            Status
          </li>
          <li id="content" style={{ width: '10%' }}>
            공개
          </li>
        </ul>
        {problemList.map((problem, i) => {
          if (i === problemList.length - 1) {
            return (
              <ul id="content-list-last" key={i}>
                <li id="content" style={{ width: '10%' }}>
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
                <li id="content" style={{ width: '10%' }}>
                  <StyledButton
                    onClick={() => {
                      handleStatus(problem.p_id)
                    }}
                  >
                    Status
                  </StyledButton>
                </li>
                <li id="content" style={{ width: '10%' }}>
                  {problem.is_public === 1 ? <p style={{ fontSize: '0.8rem' }}>공개</p> : <p style={{ fontSize: '0.8rem' }}>비공개</p>}
                </li>
              </ul>
            )
          } else
            return (
              <ul id="content-list" key={i}>
                <li id="content" style={{ width: '10%' }}>
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
                <li id="content" style={{ width: '10%' }}>
                  <StyledButton
                    onClick={() => {
                      handleStatus(problem.p_id)
                    }}
                  >
                    Status
                  </StyledButton>
                </li>
                <li id="content" style={{ width: '10%' }}>
                  {problem.is_public === 1 ? <p style={{ fontSize: '0.8rem' }}>공개</p> : <p style={{ fontSize: '0.8rem' }}>비공개</p>}
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
  button.edit {
    color: yellow;
  }
  .delete {
    color: red;
  }
  border: none;
  color: blue;
  background: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .edit {
    color: yellow;
  }
  .delete {
    color: red;
  }
`
