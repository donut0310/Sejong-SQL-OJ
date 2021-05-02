import React from 'react'
import styled from 'styled-components'

const AdminTable = () => {
  const scores = [
    { id: '1701', name: '홍ㅇㅇ', score: '100', query_cost: '3.42' },
    { id: '1801', name: '김ㅇㅇ', score: '30', query_cost: '-' },
    { id: '1901', name: '이ㅇㅇ', score: '100', query_cost: '4.08' },
  ]
  // TODO test case 별로 점수 나타내고 학생 코드 가져와서 볼 수 있게 해야됨.

  return (
    <Container>
      <ul id="table-list">
        <ul id="title-tab">
          <li id="content" style={{ width: '10%' }}>
            ID
          </li>
          <li id="content" style={{ width: '10%' }}>
            이름
          </li>
          <li id="content" style={{ width: '10%' }}>
            총점
          </li>
          <li id="content" style={{ width: '70%' }}>
            Query Cost
          </li>
        </ul>
        {scores.map((score, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '10%' }}>
              {score.id}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {score.name}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {score.score}/100
            </li>
            <li id="content" style={{ width: '70%' }}>
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
