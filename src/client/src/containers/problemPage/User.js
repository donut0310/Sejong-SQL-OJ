import React, { useState, useEffect } from 'react'
import axios from 'axios'

import UserTable from '../../components/pages/problemPage/UserTable'

const User = () => {
  const [problemList, setProblemList] = useState([])

  // TODO
  useEffect(() => {
    ;(async () => {
      const classId = '1'
      const weekId = '1'
      const { data } = await axios.get(`/api/v1/user/problem/${classId}/${weekId}`)
      // res => result(obj), message("success")
      console.log('get problem list info data=>', data)
      // console.log('data.result =>', data.result)
      // setProblemList(data.result)
    })()
  }, [])

  return (
    <div>
      <UserTable problemList={problemList} />
    </div>
  )
}

export default User
