import React from 'react'
import styled from 'styled-components'

const UserTable = () => {
  const scores = [
    { submit_id: '3', id: '1701', result: 'A/C', score: '100', submit_time: '2000-01-01 00:00:00' },
    { submit_id: '2', id: '1801', result: 'W/A', score: '30', submit_time: '2000-01-01 00:00:00' },
    { submit_id: '1', id: '1901', result: 'A/C', score: '100', submit_time: '2000-01-01 00:00:00' },
  ]

  return (
    <Container>
      <ul id="table-list">
        <ul id="title-tab">
          <li id="content" style={{ width: '15%' }}>
            제출번호
          </li>
          <li id="content" style={{ width: '20%' }}>
            아이디
          </li>
          <li id="content" style={{ width: '15%' }}>
            결과
          </li>
          <li id="content" style={{ width: '10%' }}>
            점수
          </li>
          <li id="content" style={{ width: '40%' }}>
            제출시각
          </li>
        </ul>
        {scores.map((score, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '15%' }}>
              {score.submit_id}
            </li>
            <li id="content" style={{ width: '20%' }}>
              {score.id}
            </li>
            <li id="content" style={{ width: '15%' }}>
              {/* button or icon 으로 바꾸어야됨 */}
              {score.result}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {score.score}/100
            </li>
            <li id="content" style={{ width: '40%' }}>
              {score.submit_time}
            </li>
          </ul>
        ))}
      </ul>
    </Container>
  )
}

export default UserTable

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
