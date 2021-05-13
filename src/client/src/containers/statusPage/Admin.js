import React from 'react'
import AdminTable from '../../components/pages/statusPage/AdminTable'

const Admin = () => {
  return (
    <>
      <span>
        아이디:<input className="input-form" type="text" placeholder="아이디"></input>
      </span>
      <span>
        결과:
        <select id="select-form" name="결과">
          <option value="">결과</option>
        </select>
      </span>
      <button id="submit-btn">조회</button>
      <AdminTable />
    </>
  )
}

export default Admin
