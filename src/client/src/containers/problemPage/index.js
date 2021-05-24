import React from 'react'
import { connect } from 'react-redux'

import User from './User'

const ProblemPage = ({ user }) => {
  return (
    <>
      <User />
    </>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}

export default connect(mapStateToProps)(ProblemPage)
