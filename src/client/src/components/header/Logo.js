import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Logo = () => {
  const history = useHistory()

  const handleLogo = () => {
    history.push('/')
  }

  return <LogoWrapper onClick={handleLogo}>Sejong SQL OJ</LogoWrapper>
}

export default Logo

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
