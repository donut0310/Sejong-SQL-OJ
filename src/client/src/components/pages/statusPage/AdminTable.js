import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const AdminTable = () => {
  const classId = 1
  const weekId = 1
  const submitId = 1

  const history = useHistory()
  const scores = [
    { id: '17010000', name: '홍ㅇㅇ', score: '100', query_cost: '3.42' },
    { id: '18010000', name: '김ㅇㅇ', score: '30', query_cost: '-' },
    { id: '19010000', name: '이ㅇㅇ', score: '100', query_cost: '4.08' },
  ]
  // TODO test case 별로 점수 나타내기

  const handleCodeCheck = () => {
    history.push(`/${classId}/${weekId}/code/${submitId}`)
  }

  return (
    <Container>
      <ul id="table-list">
        <ul id="title-tab">
          <li id="content" style={{ width: '15%' }}>
            아이디
          </li>
          <li id="content" style={{ width: '10%' }}>
            이름
          </li>
          <li id="content" style={{ width: '15%' }}>
            총점
          </li>
          <li id="content" style={{ width: '10%' }}>
            코드
          </li>
          <li id="content" style={{ width: '50%' }}>
            Query Cost
          </li>
        </ul>
        {scores.map((score, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '15%' }}>
              {score.id}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {score.name}
            </li>
            <li id="content" style={{ width: '15%' }}>
              {score.score === '100' ? (
                <>
                  <span style={{ color: 'green' }}>{score.score}</span> / 100
                </>
              ) : (
                <>
                  <span style={{ color: 'red' }}>{score.score}</span> / 100
                </>
              )}
            </li>
            <li id="content" style={{ width: '10%' }}>
              <button id="problem" onClick={handleCodeCheck}>
                Code
              </button>
            </li>
            <li id="content" style={{ width: '50%' }}>
              {score.query_cost}
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
