import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const AdminTable = () => {
  const history = useHistory()

  const classId = 1
  const weekId = 1
  const pId = 1
  // admin userId
  const userId = 1

  const handleProblemName = () => {
    history.push(`/${classId}/${weekId}/problem/${pId}`)
  }
  const handleStatus = () => {
    history.push(`/${classId}/${weekId}/status?userId=${userId}&pId=${pId}`)
  }

  const problems = [
    { class: '데이터베이스(001)', name: 'SQL 연습(1)', start: 'Infinite', end: 'Infinite' },
    { class: '데이터베이스(001)', name: 'SQL 연습(2)', start: 'Infinite', end: 'Infinite' },
    { class: '데이터베이스(001)', name: 'SQL 연습(3)', start: 'Infinite', end: 'Infinite' },
  ]
  return (
    <Container>
      <ul id="table-list">
        <ul id="title-tab">
          <li id="content" style={{ width: '20%' }}>
            Class
          </li>
          <li id="content" style={{ width: '20%' }}>
            제목
          </li>
          <li id="content" style={{ width: '20%' }}>
            Start
          </li>
          <li id="content" style={{ width: '20%' }}>
            End
          </li>
          <li id="content" style={{ width: '20%' }}>
            Status
          </li>
        </ul>
        {problems.map((problem, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '20%' }}>
              {problem.class}
            </li>
            <li id="content" style={{ width: '20%' }}>
              <button id="problem" onClick={handleProblemName}>
                {problem.name}
              </button>
            </li>
            <li id="content" style={{ width: '20%' }}>
              {problem.start}
            </li>
            <li id="content" style={{ width: '20%' }}>
              {problem.end}
            </li>
            <li id="content" style={{ width: '20%' }}>
              <StyledButton onClick={handleStatus}>Status</StyledButton>
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
  border: none;
  color: blue;
  background: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
