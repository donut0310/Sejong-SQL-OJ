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

  const handleAddProblem = () => {
    history.push('/addProblem')
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

      await axios
        .get(`/api/v1/week/${weekId}`)
        .then((res) => setProblemInfo({ className: res.data.class_name, weekName: res.data.week_name }))
        .catch((err) => console.log('TITLE ERROR', err))
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
