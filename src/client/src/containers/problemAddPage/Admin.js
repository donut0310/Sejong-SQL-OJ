import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Title from '../../components/title/Title'
import TitleInput from '../../components/pages/problemAddPage/TitleInput'
import DescriptionInput from '../../components/pages/problemAddPage/DescriptionInput'
import TimeInput from '../../components/pages/problemAddPage/TimeInput'
import TestcaseInput from '../../components/pages/problemAddPage/TestcaseInput'
import OptionButton from '../../components/pages/problemAddPage/OptionButton'

const Admin = () => {
  const history = useHistory()

  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
  })
  const [title, setTitle] = useState('')
  const [contentInput, setContentInput] = useState('')
  const [tableInfo, setTableInfo] = useState([])
  const [startTime, setStartTime] = useState('Infinite')
  const [endTime, setEndTime] = useState('Infinite')
  const [isPublic, setIsPublic] = useState(true)

  const classId = 1
  const weekId = 1

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(`/api/v1/week/${weekId}`)
      // const currentInfo = data.result[0]
      // setProblemInfo({ className: currentInfo.class_name, weekName: currentInfo.data.week_name })
    })()
  }, [])

  const handleCancel = () => {
    alert('정말 취소하시겠습니까?')
    // TODO 취소->유지, 확인->뒤로가기
    history.goBack()
  }

  const handleUploadProblem = async () => {
    history.push(history.goBack())
    ;(async () => {
      const { data } = await axios.post(`/api/v1/user/${classId}/${weekId}`, {
        title: title,
        content: contentInput,
        table_info: tableInfo,
        start_time: startTime,
        end_time: endTime,
        is_public: isPublic,
      })
      console.log('handleUploadProblem => ', data)
    })()
  }

  return (
    <div>
      <Title problemInfo={problemInfo} />
      <TitleInput setTitle={setTitle} />
      <DescriptionInput contentInput={contentInput} setContentInput={setContentInput} tableInfo={tableInfo} setTableInfo={setTableInfo} />
      <TimeInput startTime={startTime} setStartTime={setStartTime} endTime={endTime} setEndTime={setEndTime} />
      <TestcaseInput />
      <OptionButton isPublic={isPublic} setIsPublic={setIsPublic} handleCancel={handleCancel} handleSubmit={handleUploadProblem} />
    </div>
  )
}

export default Admin
