import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography>Copyright 2021. 세종컴공</Typography>
    </FooterWrapper>
  )
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(Footer)

const FooterWrapper = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1.5px solid ${(props) => props.theme.SUB_BORDER};
  color: ${(props) => props.theme.GENERAL_FONT};
  background: ${(props) => props.theme.BACKGROUND};
`
