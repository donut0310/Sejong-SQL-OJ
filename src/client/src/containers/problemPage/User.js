import React, { useState, useEffect } from 'react'
import axios from 'axios'

import UserTable from '../../components/pages/problemPage/UserTable'

const User = () => {
  const dummyDataList = [
    [
      {
        p_id: '1',
        week_id: '1',
        class_id: '1',
        title: '1번 문제',
        content: '1+1은?',
        start_time: '2021-01-14T21:17:00.000Z',
        end_time: '2021-01-15T21:17:00.000Z',
        tc_cnt: '3',
        tc_id: '1',
        table_info: '답은 3개',
        table_create: 'create table',
        week_title: '1주차 SELECT문',
      },
      {
        p_id: '2',
        week_id: '1',
        class_id: '1',
        title: '2번 문제',
        content: '2+2은?',
        start_time: '2021-01-14T21:17:00.000Z',
        end_time: '2021-01-15T21:17:00.000Z',
        tc_cnt: '3',
        tc_id: '1',
        table_info: '답은 3개',
        table_create: 'create table',
        week_title: '1주차 SELECT문',
      },
    ],
  ]

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
      <UserTable problemList={dummyDataList} />
    </div>
  )
}

export default User
