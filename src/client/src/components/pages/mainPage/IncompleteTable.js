import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const IncompleteTable = () => {
  const history = useHistory()

  const classId = 1
  const weekId = 1
  const pId = 1

  const handleProblemName = () => {
    history.push(`/${classId}/${weekId}/problem/${pId}`)
  }

  const incomplete = [
    { class: '데이터베이스(001)', name: 'SQL 연습(2)', submit: '1', score: '30', start: 'Infinite', end: 'Infinite' },
    { class: '데이터베이스(001)', name: 'SQL 연습(3)', submit: '0', score: '0', start: 'Infinite', end: 'Infinite' },
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
          <li id="content" style={{ width: '10%' }}>
            제출
          </li>
          <li id="content" style={{ width: '10%' }}>
            점수
          </li>
          <li id="content" style={{ width: '20%' }}>
            Start
          </li>
          <li id="content" style={{ width: '20%' }}>
            End
          </li>
        </ul>
        {incomplete.map((problem, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '20%' }}>
              {problem.class}
            </li>
            <li id="content" style={{ width: '20%' }}>
              <button id="problem" onClick={handleProblemName}>
                {problem.name}
              </button>
            </li>
            <li id="content" style={{ width: '10%' }}>
              {problem.submit}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {problem.score}/100
            </li>
            <li id="content" style={{ width: '20%' }}>
              {problem.start}
            </li>
            <li id="content" style={{ width: '20%' }}>
              {problem.end}
            </li>
          </ul>
        ))}
      </ul>
    </Container>
  )
}

export default IncompleteTable

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
