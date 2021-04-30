import React from 'react'
import AdminTable from './AdminTable'

const AdminPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
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
      <AdminTable />
    </div>
  )
}

export default AdminPage
