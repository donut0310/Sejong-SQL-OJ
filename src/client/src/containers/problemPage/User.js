import React, { useState, useEffect } from 'react'
import axios from 'axios'
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

  // TODO
  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(`/api/v1/problem/${classId}/${weekId}`)
      // res => result(obj), message("success")
      console.log('Get problem list =>', data)
      setProblemList(data.result)

      const res = await axios.get(`/api/v1/week/${weekId}`)
      const currentInfo = res.data.result[0]
      console.log('Get week Info =>', currentInfo)
      setProblemInfo({ className: currentInfo.class_name, weekName: currentInfo.week_title })
    })()
  }, [])

  return (
    <div>
      <Title problemInfo={problemInfo} />
      <UserTable problemList={problemList} />
    </div>
  )
}

export default User
