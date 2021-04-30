import React from 'react'
import styled from 'styled-components'

const Table = () => {
  const problems = [
    { num: '1', name: 'Hello Sejong!', submit: '1', score: '100', start: 'Infinite', end: 'Infinite' },
    { num: '2', name: '절댓값 출력', submit: '1', score: '100', start: 'Infinite', end: 'Infinite' },
    { num: '3', name: '숫자 출력', submit: '1', score: '100', start: 'Infinite', end: 'Infinite' },
  ]
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
          <li id="content" style={{ width: '10%' }}>
            점수
          </li>
          <li id="content" style={{ width: '17.5%' }}>
            Start
          </li>
          <li id="content" style={{ width: '17.5%' }}>
            End
          </li>
          <li id="content" style={{ width: '10%' }}>
            Status
          </li>
        </ul>
        {problems.map((problem, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '10%' }}>
              {problem.num}
            </li>
            <li id="content" style={{ width: '20%' }}>
              {problem.name}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {problem.submit}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {problem.score}
            </li>
            <li id="content" style={{ width: '17.5%' }}>
              {problem.start}
            </li>
            <li id="content" style={{ width: '17.5%' }}>
              {problem.end}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {/* button 클릭 시 status 창으로 */}
              <StyledButton>Status</StyledButton>
            </li>
          </ul>
        ))}
      </ul>
    </Container>
  )
}

export default Table

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
