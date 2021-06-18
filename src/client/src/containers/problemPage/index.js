import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import User from './User'
import Admin from './Admin'

const ProblemPage = ({ user }) => {
  const { classId } = useParams()
  return <>{user.role === 1 || user.class_id.includes(Number(classId)) ? <Admin /> : <User />}</>
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}

export default connect(mapStateToProps)(ProblemPage)
