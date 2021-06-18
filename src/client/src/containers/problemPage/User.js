import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import Title from '../../components/title/Title'
import UserTable from '../../components/pages/problemPage/UserTable'

const User = () => {
  const history = useHistory()
  const { classId, weekId } = useParams()

  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
    problemName: '',
    startTime: '',
    endTime: '',
  })

  const [problemList, setProblemList] = useState([])

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
    <Container>
      <Title problemInfo={problemInfo} />
      <UserTable problemList={problemList} />
    </Container>
  )
}

export default User

const Container = styled.div`
  text-align: end;
  color: ${(props) => props.theme.GENERAL_FONT};
`
