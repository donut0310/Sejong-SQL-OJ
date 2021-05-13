import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Title from '../../components/title/Title'
import TitleInput from '../../components/pages/problemAddPage/TitleInput'
import DescriptionInput from '../../components/pages/problemAddPage/DescriptionInput'
import TimeInput from '../../components/pages/problemAddPage/TimeInput'
import TestcaseInput from '../../components/pages/problemAddPage/TestcaseInput'
import OptionButton from '../../components/pages/problemAddPage/OptionButton'

const Admin = () => {
  const weekId = 1

  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
  })

  // 문제 제목
  const [title, setTitle] = useState('')
  // 문제 내용 - 보낼 때 stringify
  const [description, setDescription] = useState('')
  const [tableInfo, setTableInfo] = useState([])
  // 시작, 마감 일시
  const [startTime, setStartTime] = useState('infinite')
  const [endTime, setEndTime] = useState('infinite')
  // 공개 / 비공개
  const [isPublic, setIsPublic] = useState(true)
  // 테스트 케이스
  // TODO
  // 제출 버튼 핸들러
  const handleAddProblem = () => {
    console.log('Submit add problem data')
    console.log('title', title)
    console.log('description', description)
    console.log('tableInfo', tableInfo)
    console.log('startTime', startTime)
    console.log('endTime', endTime)
    console.log('isPublic', isPublic)
    console.log('TC')
  }

  useEffect(() => {
    ;(async () => {
      // const { data } = await axios.get(`/api/v1/week/${weekId}`)
      // console.log('useEffect add problem', data)
      // await setProblemInfo({ className: data.class_name, weekName: data.week_name })
    })()
  }, [])

  return (
    <div>
      <Title problemInfo={problemInfo} />
      <TitleInput title={title} setTitle={setTitle} />
      <DescriptionInput description={description} setDescription={setDescription} tableInfo={tableInfo} setTableInfo={setTableInfo} />
      <TimeInput setStartTime={setStartTime} setEndTime={setEndTime} />
      <TestcaseInput />
      <OptionButton isPublic={isPublic} setIsPublic={setIsPublic} handleAddProblem={handleAddProblem} />
    </div>
  )
}

export default Admin
