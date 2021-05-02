import React from 'react'
import styled from 'styled-components'
import UserTable from './UserTable'
import Title from '../../title/Title'

const UserPage = () => {
  const problemInfo = {
    classInfo: '데이터베이스1(김지환)',
    weekInfo: '7주차 실습',
    problemInfo: '동물 보호소',
    startTime: 'Infinite',
    endTime: 'Infinite',
  }

  return (
    <Container>
      <Title problemInfo={problemInfo} />
      <span>
        아이디:<input id="input-form" type="text" placeholder="아이디"></input>
      </span>
      <span>
        문제:
        <select id="select-form" name="문제">
          <option value="">문제</option>
        </select>
      </span>
      <span>
        결과:
        <select id="select-form" name="결과">
          <option value="">결과</option>
        </select>
      </span>
      <button id="submit-btn">조회</button>
      <UserTable />
    </Container>
  )
}

export default UserPage

const Container = styled.div`
  text-align: center;
  color: ${(props) => props.theme.GENERAL_FONT};
`
