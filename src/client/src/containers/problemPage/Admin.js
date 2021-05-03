import React from 'react'
import AdminTable from '../../components/pages/problemPage/AdminTable'

const Admin = () => {
  return (
    <>
      <AdminTable />
      <button id="submit-btn" style={{ width: '80px', marginRight: '10px' }}>
        문제 추가
      </button>
    </>
  )
}

export default Admin
