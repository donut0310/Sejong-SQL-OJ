import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Title from '../../components/title/Title'
import UserTable from '../../components/pages/problemPage/UserTable'

const User = () => {
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
      const classId = '1'
      const weekId = '1'
      const { data } = await axios.get(`/api/v1/problem/${classId}/${weekId}`)
      // res => result(obj), message("success")
      console.log('get problem list info data=>', data)
      console.log('data.result =>', data.result)
      setProblemList(data.result)

      await axios
        .get(`/api/v1/week/${weekId}`)
        .then((res) => setProblemInfo({ className: res.data.class_name, weekName: res.data.week_name }))
        .catch((err) => console.log('TITLE ERROR', err))
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
