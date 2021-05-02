import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const AdminTable = () => {
  const history = useHistory()

  const handleProblemName = () => {
    history.push('/coding')
  }

  const problems = [
    { num: '1', name: 'Hello Sejong!', start: 'Infinite', end: 'Infinite' },
    { num: '2', name: '절댓값 출력', start: 'Infinite', end: 'Infinite' },
    { num: '3', name: '숫자 출력', start: 'Infinite', end: 'Infinite' },
  ]

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
          <li id="content" style={{ width: '15%' }}>
            Start
          </li>
          <li id="content" style={{ width: '15%' }}>
            End
          </li>
          <li id="content" style={{ width: '10%' }}>
            Status
          </li>
          <li id="content" style={{ width: '10%' }}>
            수정
          </li>
          <li id="content" style={{ width: '10%' }}>
            삭제
          </li>
        </ul>
        {problems.map((problem, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '10%' }}>
              {problem.num}
            </li>
            <li id="content" style={{ width: '30%' }} onClick={handleProblemName}>
              {problem.name}
            </li>
            <li id="content" style={{ width: '15%' }}>
              {problem.start}
            </li>
            <li id="content" style={{ width: '15%' }}>
              {problem.end}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {/* button 클릭 시 status 창으로 */}
              <StyledButton>Status</StyledButton>
            </li>
            <li id="content" style={{ width: '10%' }}>
              {/* button 클릭 시 문제 관리(정보 및 테스트케이스 관리) 창으로 */}
              <StyledButton style={{ color: 'red' }}>수정</StyledButton>
            </li>
            <li id="content" style={{ width: '10%' }}>
              <StyledButton style={{ color: 'red' }}>삭제</StyledButton>
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
