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

  const [problemList, setProblemList] = useState([])

  const weekId = 1
  const pId = 1

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(`/api/v1/user/status/${pId}`)
      setProblemList(data.result)

      const { titleData } = await axios.get(`/api/v1/week/${weekId}`)
      // const currentInfo = titleData.result[0]
      // setProblemInfo({ className: currentInfo.class_name, weekName: currentInfo.data.week_name })
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
      <AdminTable problemList={problemList} />
    </>
  )
}

export default Admin
