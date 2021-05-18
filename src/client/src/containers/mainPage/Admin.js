import React from 'react'
import styled from 'styled-components'
import AdminTable from '../../components/pages/mainPage/AdminTable'

const Admin = () => {
  return (
    <Container>
      <div style={{ margin: '10px', fontWeight: '600' }}>이번 주 실습 문제</div>
      <AdminTable />
    </Container>
  )
}

export default Admin
const Container = styled.div`
  color: ${(props) => props.theme.GENERAL_FONT};
`
