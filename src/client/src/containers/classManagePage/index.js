import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import WeekManagement from '../../components/pages/classManagePage/WeekManagement'
import TAManagement from '../../components/pages/classManagePage/TAManagement'
import StudentManagement from '../../components/pages/classManagePage/StudentManagement'

const ClassManagePage = () => {
  const problemInfo = {
    classInfo: '데이터베이스1(김지환)',
  }

  return (
    <PageWrapper>
      <Title problemInfo={problemInfo} />
      <Subtitle subtitle={'주차 관리'} />
      <WeekManagement />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Subtitle subtitle={'조교 등록'} />
          <TAManagement />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Subtitle subtitle={'학생 등록'} />
          <StudentManagement />
        </Grid>
      </Grid>
    </PageWrapper>
  )
}

export default ClassManagePage

const PageWrapper = styled.div`
  border: 1px solid black;
  color: ${(props) => props.theme.GENERAL_FONT};
  /* padding-bottom: 20px; */
`
