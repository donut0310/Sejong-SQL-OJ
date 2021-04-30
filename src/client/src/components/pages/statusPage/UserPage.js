import React from 'react'
import styled from 'styled-components'
import UserTable from './UserTable'

const UserPage = () => {
  return (
    <Container>
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
