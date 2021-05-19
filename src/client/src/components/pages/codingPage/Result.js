import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

import Problem from '../codingPage/Problem'
import ResultTable from './ResultTable'

const Result = ({ isExecuted, execIsLoading, execIsError, execResult }) => {
  useEffect(() => {
    console.log('ExecResult', execResult)
  }, [isExecuted, execIsLoading, execIsError, execResult])

  return (
    <ResultWrapper>
      {isExecuted ? (
        execIsLoading ? (
          <SpinnerWrapper>
            <StyledCircularProgress />
          </SpinnerWrapper>
        ) : execIsError ? (
          <>
            <ErrorResultWrapper>
              <WarningText>Error</WarningText>
              <ErrorResult>{execResult}</ErrorResult>
            </ErrorResultWrapper>
          </>
        ) : (
          execResult && <ResultTable execResult={execResult} />
        )
      ) : (
        <>실행버튼눌러</>
      )}
    </ResultWrapper>
  )
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

const ErrorResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const WarningText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.POINT};
  margin-bottom: 15px;
`

const ErrorResult = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.POINT};
`

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StyledCircularProgress = styled(CircularProgress)`
  * {
    color: ${(props) => props.theme.POINT};
  }
`
