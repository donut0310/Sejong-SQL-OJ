import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Title from '../../components/title/Title'
import TitleInput from '../../components/pages/problemAddPage/TitleInput'
import DescriptionInput from '../../components/pages/problemAddPage/DescriptionInput'
import TimeInput from '../../components/pages/problemAddPage/TimeInput'
import TestcaseInput from '../../components/pages/problemAddPage/TestcaseInput'
import OptionButton from '../../components/pages/problemAddPage/OptionButton'

const Admin = () => {
  const history = useHistory()
  const { classId, weekId } = useParams()

  // TODO

  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
  })

  const formData = new FormData()

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

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(`/api/v1/week/${weekId}`)
      const currentInfo = data.result[0]
      console.log('title currentInfo', currentInfo)
      setProblemInfo({ className: currentInfo.class_name, weekName: currentInfo.week_title })
    })()
  }, [])

  // 제출 버튼 핸들러
  const handleAddProblem = async () => {
    let cnt = 0
    for (const [index, file] of formData.entries()) {
      cnt++
    }

    const temp = JSON.stringify({
      week_title: problemInfo.weekName,
      title: title,
      content: description,
      table_info: JSON.stringify(tableInfo),
      start_time: startTime,
      end_time: endTime,
      is_public: isPublic,
      tc_cnt: cnt / 2,
    })

    formData.append('body', temp)

    // for (const [index, file] of formData.entries()) {
    //   console.log('formData', index, file)
    // }

    const { data } = await axios.post(`/api/v1/user/problem/${classId}/${weekId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    console.log('Add problem data', formData)
    console.log('Add problem res', data)

    history.goBack()
  }

  const handleCancel = () => {
    alert('정말 취소하시겠습니까?')
    // TODO 취소->유지, 확인->뒤로가기
    history.goBack()
  }

  return (
    <Container>
      <Title problemInfo={problemInfo} />
      <TitleInput title={title} setTitle={setTitle} />
      <DescriptionInput description={description} setDescription={setDescription} tableInfo={tableInfo} setTableInfo={setTableInfo} />
      <TimeInput setStartTime={setStartTime} setEndTime={setEndTime} />
      <TestcaseInput formData={formData} />
      <OptionButton isPublic={isPublic} setIsPublic={setIsPublic} handleCancel={handleCancel} handleSubmit={handleAddProblem} />
    </Container>
  )
}

export default Admin

const Container = styled.div`
  color: ${(props) => props.theme.GENERAL_FONT};
`
