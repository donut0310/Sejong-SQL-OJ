import React from 'react'
import styled from 'styled-components'

const SubTitle = ({ name }) => {
  return <SubTitleWrapper>{name}</SubTitleWrapper>
}

export default SubTitle

const SubTitleWrapper = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.GENERAL_FONT};
  margin-top: 15px;
  margin-bottom: 10px;
`
