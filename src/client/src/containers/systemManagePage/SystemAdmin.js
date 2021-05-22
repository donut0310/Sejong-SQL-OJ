import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Subtitle from '../../components/subtitle/Subtitle'
import TitleManagement from '../../components/pages/systemManagePage/TitleManagement'
import ProfessorManagement from '../../components/pages/systemManagePage/ProfessorManagement'

const SystemAdmin = () => {
  const history = useHistory()
  const [className, setClassName] = useState('')
  const [professor, setProfessor] = useState([])

  const handleCancel = () => {
    alert('정말 취소하시겠습니까?')
    history.goBack()
  }

  const handleSubmit = () => {
    if (className && professor) {
      ;(async () => {
        console.log('강좌 생성')
        // const { data } = await axios.post(`/api/v1/course/enrollProf`, {
        //   users: professor,
        //   class_name: className,
        // })
        // console.log(data)
      })()
    } else {
      alert('모두 입력해주세요.')
    }
  }

  return (
    <Wrapper>
      <Title>강좌 개설</Title>
      <Subtitle subtitle={'강좌 제목'} />
      <TitleManagement className={className} setClassName={setClassName} />
      <Subtitle subtitle={'교수 등록'} />
      <ProfessorManagement professor={professor} setProfessor={setProfessor} />
      <div style={{ textAlign: 'end' }}>
        <button id="submit-btn" onClick={handleCancel}>
          취소
        </button>
        <button id="submit-btn" onClick={handleSubmit}>
          등록
        </button>
      </div>
    </Wrapper>
  )
}

export default SystemAdmin

const Wrapper = styled.div`
  color: ${(props) => props.theme.GENERAL_FONT};
`
const Title = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.SUB_BORDER};
  background: ${(props) => props.theme.INPUT_BACKGROUND};
  display: flex;
  font-size: 2em;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`
