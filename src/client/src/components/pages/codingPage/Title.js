import React from 'react'
import styled from 'styled-components'

const Title = ({ name }) => {
  return <TitleWrapper>{name}</TitleWrapper>
}

export default Title

const TitleWrapper = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.GENERAL_FONT};
  margin-top: 7px;
  margin-bottom: 7px;
`
