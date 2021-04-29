import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return <LogoWrapper>SSOJ</LogoWrapper>
}

export default Logo

const LogoWrapper = styled.div`
  height: 90px;
  font-size: 1.8rem;

  display: flex;
  align-items: center;
  float: left;
  margin-left: 15px;
`
