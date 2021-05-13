import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Title from '../../components/title/Title'
import TitleInput from '../../components/pages/problemAddPage/TitleInput'
import DescriptionInput from '../../components/pages/problemAddPage/DescriptionInput'
import TimeInput from '../../components/pages/problemAddPage/TimeInput'
import TestcaseInput from '../../components/pages/problemAddPage/TestcaseInput'
import OptionButton from '../../components/pages/problemAddPage/OptionButton'

const Admin = () => {
  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
  })
  const weekId = 1
  useEffect(() => {
    ;(async () => {
      await axios
        .get(`/api/v1/week/${weekId}`)
        .then((res) => setProblemInfo({ className: res.data.class_name, weekName: res.data.week_name }))
        .catch((err) => console.log('TITLE ERROR', err))
    })()
  }, [])

  return (
    <div>
      <Title problemInfo={problemInfo} />
      <TitleInput />
      <DescriptionInput />
      <TimeInput />
      <TestcaseInput />
      <OptionButton />
    </div>
  )
}

export default Admin
