import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const AdminTable = ({ problemList }) => {
  const history = useHistory()

  const classId = 1
  const weekId = 1
  const pId = 1
  // admin user id
  const userId = 1

  const handleProblemName = () => {
    history.push(`/${classId}/${weekId}/problem/${pId}`)
  }
  const handleStatus = () => {
    history.push(`/${classId}/${weekId}/status?userId=${userId}&pId=${pId}`)
  }

  const handleDelete = () => {
    console.log('delete problem')
  }

  console.log(problemList)

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
            삭제
          </li>
        </ul>
        {problemList.map((problem, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '10%' }}>
              {problem.p_id}
            </li>
            <li id="content" style={{ width: '30%' }}>
              <button id="problem" onClick={handleProblemName}>
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
              <StyledButton onClick={handleStatus}>Status</StyledButton>
            </li>
            <li id="content" style={{ width: '10%' }}>
              <StyledButton style={{ color: 'red' }} onClick={handleDelete}>
                삭제
              </StyledButton>
            </li>
          </ul>
        ))}
      </ul>
    </Container>
  )
}

export default AdminTable

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
