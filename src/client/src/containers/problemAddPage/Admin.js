import React from 'react'
import TitleInput from '../../components/pages/problemAddPage/TitleInput'
import DescriptionInput from '../../components/pages/problemAddPage/DescriptionInput'
import TimeInput from '../../components/pages/problemAddPage/TimeInput'
import TestcaseInput from '../../components/pages/problemAddPage/TestcaseInput'
import OptionButton from '../../components/pages/problemAddPage/OptionButton'

const Admin = () => {
  return (
    <div>
      <TitleInput />
      <DescriptionInput />
      <TimeInput />
      <TestcaseInput />
      <OptionButton />
    </div>
  )
}

export default Admin
