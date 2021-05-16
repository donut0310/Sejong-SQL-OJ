import React from 'react'
import styled from 'styled-components'

const Subtitle = ({ subtitle }) => {
  return <StyledTitle>{subtitle}</StyledTitle>
}

export default Subtitle

const StyledTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 20px 0;
  color: ${(props) => props.theme.GENERAL_FONT};
`
