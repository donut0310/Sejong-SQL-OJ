import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import axios from 'axios'

import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import WeekManagement from '../../components/pages/classManagePage/WeekManagement'
import TAManagement from '../../components/pages/classManagePage/TAManagement'
import StudentManagement from '../../components/pages/classManagePage/StudentManagement'

const Admin = () => {
  const history = useHistory()
  const { classId } = useParams()

  const [problemInfo, setProblemInfo] = useState({
    className: '',
  })

  // TAManagement
  const [currentTA, setCurrentTA] = useState([])
  const [updateTA, setUpdateTA] = useState([])

  // StudentManagement
  const [currentStd, setCurrentStd] = useState([])
  const [updateStd, setUpdateStd] = useState([])

  const handleAddTA = async () => {
    const { data } = await axios.post(`/api/v1/course/assists/${classId}`, { assists: updateTA })
    console.log('Add TA List', data)
  }

  const handleDeleteTA = async () => {
    const { data } = await axios.delete(`/api/v1/course/assists/delete/${classId}`, { data: { assists: updateTA } })
    console.log('Delete TA List', data)
  }

  const handleAddStd = async () => {
    const { data } = await axios.post(`/api/v1/course/stds/${classId}`, { stds: updateStd })
    console.log('Add Std List', data)
  }

  const handleDeleteStd = async () => {
    const { data } = await axios.delete(`/api/v1/course/stds/delete/${classId}`, { data: { stds: updateStd } })
    console.log('Delete Std List', data)
  }

  useEffect(() => {
    const fetchStudentData = async () => {
      const { data } = await axios.get(`/api/v1/course/user/${classId}`)
      // console.log('Fetch stds, TA list=>', data)
      setCurrentStd(data.stds || [])
      setCurrentTA(data.assists || [])
    }

    const fetchTitleData = async () => {
      const { data } = await axios.get(`/api/v1/course/${classId}`)
      // console.log('Fetch title date=>', data)
      setProblemInfo({
        className: data.result[0].class_name,
      })
    }

    fetchStudentData()
    fetchTitleData()
  }, [])

  // TODO index -> admin.js생성 후 옮겨야됨
  return (
    <PageWrapper>
      <Title problemInfo={problemInfo} />
      <Subtitle subtitle={'주차 관리'} />
      <WeekManagement />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Subtitle subtitle={'조교 관리'} />
          <TAManagement currentTA={currentTA} setCurrentTA={setCurrentTA} updateTA={updateTA} setUpdateTA={setUpdateTA} handleAddTA={handleAddTA} handleDeleteTA={handleDeleteTA} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Subtitle subtitle={'학생 관리'} />
          <StudentManagement currentStd={currentStd} setCurrentStd={setCurrentStd} updateStd={updateStd} setUpdateStd={setUpdateStd} handleAddStd={handleAddStd} handleDeleteStd={handleDeleteStd} />
        </Grid>
      </Grid>
    </PageWrapper>
  )
}

export default Admin

const PageWrapper = styled.div`
  color: ${(props) => props.theme.GENERAL_FONT};
  /* border: 1px solid black; */
`
