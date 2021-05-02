import React from 'react'
import UserTable from '../../components/pages/statusPage/UserTable'

const User = () => {
  return (
    <>
      <span>
        아이디:<input id="input-form" type="text" placeholder="아이디"></input>
      </span>
      <span>
        결과:
        <select id="select-form" name="결과">
          <option value="">결과</option>
        </select>
      </span>
      <button id="submit-btn">조회</button>
      <UserTable />
    </>
  )
}

export default User
