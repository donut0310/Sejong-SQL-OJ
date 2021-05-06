import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const UserTable = ({ problemList }) => {
  const history = useHistory()

  const handleProblemName = () => {
    history.push('/coding')
  }
  const handleStatus = () => {
    history.push('status')
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
          <li id="content" style={{ width: '10%' }}>
            제출
          </li>
          <li id="content" style={{ width: '15%' }}>
            점수
          </li>
          <li id="content" style={{ width: '15%' }}>
            Start
          </li>
          <li id="content" style={{ width: '15%' }}>
            End
          </li>
          <li id="content" style={{ width: '10%' }}>
            Status
          </li>
        </ul>

        {problemList[0].map((problem, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '10%' }}>
              {problem.p_id}
            </li>
            <li id="content" style={{ width: '20%' }}>
              <button id="problem" onClick={handleProblemName}>
                {problem.title}
              </button>
            </li>
            <li id="content" style={{ width: '10%' }}>
              {/* 사용자 제출 횟수 가져와야함 */}
              제출횟수
            </li>
            <li id="content" style={{ width: '15%' }}>
              {/* 사용자 점수 가져와야함 */}
              점수
            </li>
            <li id="content" style={{ width: '15%' }}>
              {/* Format 바꿔야됨 */}
              {problem.start_time}
            </li>
            <li id="content" style={{ width: '15%' }}>
              {/* Format 바꿔야됨 */}
              {problem.end_time}
            </li>
            <li id="content" style={{ width: '10%' }}>
              <StyledButton onClick={handleStatus}>Status</StyledButton>
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
const StyledButton = styled.button`
  border: none;
  color: blue;
  background: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
