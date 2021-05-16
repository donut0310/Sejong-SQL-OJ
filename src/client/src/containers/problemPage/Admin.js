import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import AdminTable from '../../components/pages/problemPage/AdminTable'
import Title from '../../components/title/Title'

const Admin = () => {
  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
    problemName: '',
    startTime: '',
    endTime: '',
  })

  const history = useHistory()
  // TODO
  const classId = 1
  const weekId = 1

  const handleAddProblem = () => {
    history.push(`/manage/${classId}/${weekId}/addproblem`)
  }

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

      const { titleData } = await axios.get(`/api/v1/week/${weekId}`)
      // const currentInfo = titleData.result[0]
      // setProblemInfo({ className: currentInfo.class_name, weekName: currentInfo.data.week_name })
    })()
  }, [])

  return (
    <>
      <Title problemInfo={problemInfo} />
      <AdminTable problemList={problemList} />
      <button id="submit-btn" style={{ width: '80px', marginRight: '10px' }} onClick={handleAddProblem}>
        문제 추가
      </button>
    </>
  )
}

export default Admin
