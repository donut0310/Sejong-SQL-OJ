import React from 'react'
import styled from 'styled-components'

const Result = () => {
  return <ResultWrapper>Result</ResultWrapper>
}

export default Result

const ResultWrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  background: ${(props) => props.theme.EDITOR_BACKGROUND};
  color: ${(props) => props.theme.GENERAL_FONT};
`
