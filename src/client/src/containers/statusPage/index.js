import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import User from './User'
import Admin from './Admin'

const StatusPage = ({ user }) => {
  const { classId } = useParams()

  return <>{user.role === 1 || user.class_id.includes(Number(classId)) ? <Admin /> : <User />}</>
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}

export default connect(mapStateToProps)(StatusPage)
