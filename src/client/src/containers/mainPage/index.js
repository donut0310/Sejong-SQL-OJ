import React from 'react'

import Title from '../../components/pages/mainPage/Title'
import User from './User'
import Admin from './Admin'

const index = () => {
  return (
    <>
      <Title />
      <p>user</p>
      <User />
      <p>admin</p>
      <Admin />
    </>
  )
}

export default index
