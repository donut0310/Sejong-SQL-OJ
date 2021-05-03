import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const UserTable = () => {
  const history = useHistory()

  const scores = [
    { submit_id: '3', id: '1701', result: 'A/C', score: '100', submit_time: '2000-01-01 00:00:00' },
    { submit_id: '2', id: '1801', result: 'W/A', score: '30', submit_time: '2000-01-01 00:00:00' },
    { submit_id: '1', id: '1901', result: 'A/C', score: '100', submit_time: '2000-01-01 00:00:00' },
  ]

  const handleCodeCheck = () => {
    history.push('/check')
    // TODO 자기 코드만 볼 수 있어야함.
  }

  return (
    <Container>
      <ul id="table-list">
        <ul id="title-tab">
          <li id="content" style={{ width: '15%' }}>
            제출번호
          </li>
          <li id="content" style={{ width: '15%' }}>
            아이디
          </li>
          <li id="content" style={{ width: '10%' }}>
            결과
          </li>
          <li id="content" style={{ width: '20%' }}>
            점수
          </li>
          <li id="content" style={{ width: '10%' }}>
            코드
          </li>
          <li id="content" style={{ width: '30%' }}>
            제출시각
          </li>
        </ul>
        {scores.map((score, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '15%' }}>
              {score.submit_id}
            </li>
            <li id="content" style={{ width: '15%' }}>
              {score.id}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {/* button or icon 으로 바꾸어야됨 */}
              {score.result}
            </li>
            <li id="content" style={{ width: '20%' }}>
              {score.score}/100
            </li>
            <li id="content" style={{ width: '10%' }}>
              <button id="problem" onClick={handleCodeCheck}>
                Code
              </button>
            </li>
            <li id="content" style={{ width: '30%' }}>
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
