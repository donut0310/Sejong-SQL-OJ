import React from 'react'
import styled from 'styled-components'
import AdminTable from './AdminTable'

const AdminProblemListPage = () => {
  return (
    <Container>
      <AdminTable />
      <button id="submit-btn" style={{ width: '80px', marginRight: '10px' }}>
        문제 추가
      </button>
    </Container>
  )
}

export default AdminProblemListPage

const Container = styled.div`
  text-align: end;
  color: ${(props) => props.theme.GENERAL_FONT};
`
