import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Title from '../../components/title/Title'
import AdminTable from '../../components/pages/statusPage/AdminTable'

const Admin = () => {
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
      const { data } = await axios.get(`/api/v1/user/status/${pId}`)
      const res = data.result[0]
      setProblemInfo({ className: res.class_name, weekName: res.week_name, problemName: res.title })
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
      <AdminTable />
    </>
  )
}

export default Admin
