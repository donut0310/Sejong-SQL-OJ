import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import AdminTable from '../../components/pages/problemPage/AdminTable'

const Admin = () => {
  const history = useHistory()
  // const dummyDataList = [
  //   {
  //     p_id: '1',
  //     week_id: '1',
  //     class_id: '1',
  //     title: '1번 문제',
  //     content: '1+1은?',
  //     start_time: '2021-01-14T21:17:00.000Z',
  //     end_time: '2021-01-15T21:17:00.000Z',
  //     tc_cnt: '3',
  //     tc_id: '1',
  //     table_info: '답은 3개',
  //     table_create: 'create table',
  //     week_title: '1주차 SELECT문',
  //   },
  //   {
  //     p_id: '2',
  //     week_id: '1',
  //     class_id: '1',
  //     title: '2번 문제',
  //     content: '2+2은?',
  //     start_time: '2021-01-14T21:17:00.000Z',
  //     end_time: '2021-01-15T21:17:00.000Z',
  //     tc_cnt: '3',
  //     tc_id: '1',
  //     table_info: '답은 3개',
  //     table_create: 'create table',
  //     week_title: '1주차 SELECT문',
  //   },
  // ]

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
    })()
  }, [])

  return (
    <>
      <AdminTable problemList={problemList} />
      <button id="submit-btn" style={{ width: '80px', marginRight: '10px' }} onClick={handleAddProblem}>
        문제 추가
      </button>
    </>
  )
}

export default Admin
