import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return <LogoWrapper>Sejong SQL OJ</LogoWrapper>
}

export default Logo

const LogoWrapper = styled.div`
  height: 90px;
  font-size: 1.7rem;

  display: flex;
  align-items: center;
  float: left;
  margin-left: 15px;
`
