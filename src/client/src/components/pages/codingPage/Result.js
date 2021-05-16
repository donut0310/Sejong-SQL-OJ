import React, { useEffect } from 'react'
import styled from 'styled-components'

import Problem from '../codingPage/Problem'
import ResultTable from './ResultTable'

const Result = ({ isExecuted, execIsLoading, execIsError, execResult }) => {
  useEffect(() => {
    console.log('REseult useEffect execResult', execResult)
  }, [isExecuted, execIsLoading, execIsError, execResult])

  return <ResultWrapper>{isExecuted ? execIsLoading ? <>로딩중</> : execIsError ? <>에러</> : execResult && <ResultTable execResult={execResult} /> : <>실행버튼눌러</>}</ResultWrapper>
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
