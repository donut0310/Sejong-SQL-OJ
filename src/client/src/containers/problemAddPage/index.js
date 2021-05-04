import React from 'react'
import Title from '../../components/title/Title'
import Admin from './Admin'

const index = () => {
  const problemInfo = {
    classInfo: '데이터베이스1(김지환)',
    weekInfo: '7주차 실습',
  }

  return (
    <div>
      <Title problemInfo={problemInfo} />
      <Admin />
    </div>
  )
}

export default index
