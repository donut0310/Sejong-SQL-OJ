import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import AdminTable from '../../components/pages/problemPage/AdminTable'
import Title from '../../components/title/Title'

const Admin = () => {
  const { classId, weekId } = useParams()

  const [problemList, setProblemList] = useState([])

  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
    problemName: '',
    startTime: '',
    endTime: '',
  })
  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(`/api/v1/problem/${classId}/${weekId}`)
      setProblemList(data.result)

      const res = await axios.get(`/api/v1/week/${weekId}`)
      const currentInfo = res.data.result[0]
      setProblemInfo({ className: currentInfo.class_name, weekName: currentInfo.week_title })
    })()
  }, [classId, weekId])

  return (
    <div>
      <Container>
        <Title problemInfo={problemInfo} />
        <AdminTable problemList={problemList} />
      </Container>
    </div>
  )
}

export default Admin

const Container = styled.div`
  text-align: end;
  color: ${(props) => props.theme.GENERAL_FONT};
`
