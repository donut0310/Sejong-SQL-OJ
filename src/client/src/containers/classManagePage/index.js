import React from 'react'
import styled from 'styled-components'

import Title from '../../components/title/Title'
import WeekManagement from '../../components/pages/classManagePage/WeekManagement'
import TAManagement from '../../components/pages/classManagePage/TAManagement'
import StudentManagement from '../../components/pages/classManagePage/StudentManagement'

const ClassManagePage = () => {
  return (
    <PageWrapper>
      ClassManagePage
      {/* <Title /> */}
      <WeekManagement />
      <TAManagement />
      <StudentManagement />
    </PageWrapper>
  )
}

export default ClassManagePage

const PageWrapper = styled.div`
  border: 1px solid black;
  padding: 10px;
`
