import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Logo = ({ user }) => {
  const history = useHistory()

  const handleLogo = () => {
    if (user.role !== 2) {
      history.push('/')
    }
  }

  return <LogoWrapper onClick={handleLogo}>Sejong SQL OJ</LogoWrapper>
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}

export default connect(mapStateToProps)(Logo)

const LogoWrapper = styled.div`
  height: 90px;
  font-size: 1.7rem;

  display: flex;
  align-items: center;
  float: left;
  margin-left: 15px;

  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.POINT};
  }
`
