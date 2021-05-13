import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Title from '../../components/title/Title'
import UserTable from '../../components/pages/statusPage/UserTable'

const User = () => {
  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
    problemName: '',
    startTime: '',
    endTime: '',
  })
  const pId = 1
  useEffect(() => {
    ;(async () => {
      await axios
        .get(`/api/v1/user/status/${pId}`)
        .then((res) => setProblemInfo({ className: res.data.class_name, weekName: res.data.week_name, problemName: res.data.title }))
        .catch((err) => console.log('TITLE ERROR', err))
    })()
  }, [])

  return (
    <>
      <Title problemInfo={problemInfo} />
      <span>
        아이디:<input className="input-form" type="text" placeholder="아이디"></input>
      </span>
      <span>
        결과:
        <select id="select-form" name="결과">
          <option value="">결과</option>
        </select>
      </span>
      <button id="submit-btn">조회</button>
      <UserTable />
    </>
  )
}

export default User
