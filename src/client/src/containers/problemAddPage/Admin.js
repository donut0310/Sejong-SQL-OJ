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
  // TODO
  // weekId 파람으로 가져와
  const weekId = 1
  const classId = 1

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
  // ! 이름 formData로 바꾸자
  const testcases = new FormData()

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(`/api/v1/week/${weekId}`)
      // const currentInfo = data.result[0]
      // setProblemInfo({ className: currentInfo.class_name, weekName: currentInfo.data.week_name })
    })()
  }, [])

  // 제출 버튼 핸들러
  const handleAddProblem = async () => {
    console.log('Submit add problem data')

    let cnt = 0
    for (const [index, file] of testcases.entries()) {
      cnt++
    }

    testcases.append('week_id', weekId)
    testcases.append('title', title)
    testcases.append('content', description)
    testcases.append('table_info', JSON.stringify(tableInfo))
    testcases.append('start_time', startTime)
    testcases.append('end_time', endTime)
    testcases.append('is_public', isPublic)
    testcases.append('tc_cnt', cnt / 2)

    for (const [index, file] of testcases.entries()) {
      console.log('formData', index, file)
    }

    // const { data } = await axios.post(`/api/v1/user/${classId}/${weekId}`, testcases, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // })
  }

  const handleCancel = () => {
    alert('정말 취소하시겠습니까?')
    // TODO 취소->유지, 확인->뒤로가기
    history.goBack()
  }

  return (
    <div>
      <Title problemInfo={problemInfo} />
      <TitleInput title={title} setTitle={setTitle} />
      <DescriptionInput description={description} setDescription={setDescription} tableInfo={tableInfo} setTableInfo={setTableInfo} />
      <TimeInput setStartTime={setStartTime} setEndTime={setEndTime} />
      <TestcaseInput testcases={testcases} />
      <OptionButton isPublic={isPublic} setIsPublic={setIsPublic} handleCancel={handleCancel} handleSubmit={handleAddProblem} />
    </div>
  )
}

export default Admin
