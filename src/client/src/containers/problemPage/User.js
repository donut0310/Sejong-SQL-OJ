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
      console.log('get problem list info data=>', data)
      setProblemList(data.result)

      const { titleData } = await axios.get(`/api/v1/week/${weekId}`)
      console.log('titleData', titleData)
      // const currentInfo = titleData.result[0]
      // setProblemInfo({ className: currentInfo.class_name, weekName: currentInfo.data.week_name })
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
