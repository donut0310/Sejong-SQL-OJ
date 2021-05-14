import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import axios from 'axios'

import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import WeekManagement from '../../components/pages/classManagePage/WeekManagement'
import TAManagement from '../../components/pages/classManagePage/TAManagement'
import StudentManagement from '../../components/pages/classManagePage/StudentManagement'

const ClassManagePage = () => {
  const [problemInfo, setProblemInfo] = useState({
    className: '',
  })

  const classId = '1'

  // StudentManagement
  const [student, setStudent] = useState([
    '19010001',
    '19010002',
    '19010003',
    '19010004',
    '19010005',
    '19010006',
    '19010007',
    '19010008',
    '19010009',
    '19010001',
    '19010002',
    '19010003',
    '19010004',
    '19010005',
    '19010006',
    '19010007',
    '19010008',
    '19010009',
  ])

  // TAManagement
  const [TA, setTA] = useState(['16010001', '16010002'])

  const handleSaveTA = () => {
    console.log('TA List', TA)
    ;(async () => {
      const { data } = await axios.post(`/api/v1/course/assists/${classId}`, { assists: TA })
      console.log('TA List updated', data)
    })()
  }

  const handleSaveStudent = () => {
    console.log('student List', student)
    ;(async () => {
      const { data } = await axios.post(` /api/v1/course/stds/${classId}`, { stds: student })
      console.log('student List updated', data)
    })()
  }

  useEffect(() => {
    const fetchStudentData = async () => {
      const { data } = await axios.get(`/api/v1/course/${classId}`)
      console.log(data)
      setStudent(data.stds || [])
      setTA(data.assists || [])
    }

    const fetchTitleData = async () => {
      // const { data } = await axios.get(`/api/v1/week/${weekId}`)
    }

    // fetchTitleData()
    // fetchStudentData()
  }, [])

  // TODO index -> admin.js생성 후 옮겨야됨
  return (
    <PageWrapper>
      <Title problemInfo={problemInfo} />
      <Subtitle subtitle={'주차 관리'} />
      <WeekManagement />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Subtitle subtitle={'조교 등록'} />
          <TAManagement TA={TA} setTA={setTA} handleSaveTA={handleSaveTA} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Subtitle subtitle={'학생 등록'} />
          <StudentManagement student={student} setStudent={setStudent} handleSaveStudent={handleSaveStudent} />
        </Grid>
      </Grid>
    </PageWrapper>
  )
}

export default ClassManagePage

const PageWrapper = styled.div`
  color: ${(props) => props.theme.GENERAL_FONT};
  /* border: 1px solid black; */
`
