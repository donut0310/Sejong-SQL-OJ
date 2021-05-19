import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory, useParams, Prompt } from 'react-router-dom'
import { connect } from 'react-redux'

import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import Code from '../../components/pages/codingPage/Code'
import Problem from '../../components/pages/codingPage/Problem'
import Result from '../../components/pages/codingPage/Result'

const User = ({ user }) => {
  const history = useHistory()
  const { classId, weekId, pId } = useParams()

  // Title.js
  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
    problemName: '',
    startTime: '',
    endTime: '',
  })

  // Problem.js
  const [isLoading, setIsLoading] = useState(false)
  const [table_info, setTable_info] = useState([])
  const [paragraph, setParagraph] = useState([])
  const [paragraphCnt, setParagraphCnt] = useState(0)

  // Code.js
  const [input, setInput] = useState('')

  // Result.js
  const [isExecuted, setIsExecuted] = useState(false)
  const [execIsLoading, setExecIsLoading] = useState(false)
  const [execIsError, setExecIsError] = useState(false)
  const [execResult, setExecResult] = useState('')

  const handleExecCode = async () => {
    if (input) {
      console.log('handleExecCode', input)
      setIsExecuted(true)
      setExecIsLoading(true)
      const { data } = await axios.post(`/api/v1/user/code/exec/${pId}`, { user_query: input })
      console.log('Exec data', data)

      if (data.message === 'success') {
        setExecIsError(false)
        setExecResult(data.result)
      } else {
        setExecIsError(true)
        setExecResult(data.error)
      }

      setExecIsLoading(false)
    } else alert('코드를 작성해주세요.')
  }

  const handleSubmitCode = async () => {
    if (input) {
      ;(async () => {
        const { data } = await axios.post(`/api/v1/user/code/submit/${pId}`, { user_query: input })
        console.log('handleSubmitCode', data)

        await history.push(`/${classId}/${weekId}/status?userId=${user.user_id}&pId=${pId}`)
      })()
    } else alert('코드를 작성해주세요.')
  }

  // 새로고침 방지 코드
  useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
    }
  }, [])

  const alertUser = (e) => {
    e.preventDefault()
    e.returnValue = ''
  }

  // TODO
  useEffect(() => {
    console.log('useEffect 실행')
    console.log('classId=>', classId)
    console.log('weekId=>', weekId)
    console.log('pId=>', pId)
    ;(async () => {
      setIsLoading(true)

      const { data } = await axios.get(`/api/v1/problem/${pId}`)
      const problem = data.result[0]
      console.log('codingpage get problem info data.result[0] =>', problem)

      // Title
      setProblemInfo({ ...problemInfo, className: problem.class_name, weekName: problem.week_title, problemName: problem.title })

      // Problem
      setTable_info(JSON.parse(problem.table_info))
      setParagraph(problem.content.split('^&^'))
      setParagraphCnt(paragraph.length)
    })()
  }, [])

  useEffect(() => {
    setIsLoading(false)
  }, [table_info, paragraph, paragraphCnt])

  return (
    <PageWrapper>
      <Title problemInfo={problemInfo} />
      <Subtitle subtitle={'문제 내용'} />
      {!isLoading && (
        <ProblemWrapper>
          <Problem table_info={table_info} paragraph={paragraph} paragraphCnt={paragraphCnt} />
        </ProblemWrapper>
      )}
      <Subtitle subtitle={'코드 작성'} />
      <Code input={input} setInput={setInput} handleExecCode={handleExecCode} handleSubmitCode={handleSubmitCode} />
      <Subtitle subtitle={'실행 결과'} />
      <Result isExecuted={isExecuted} execIsLoading={execIsLoading} execIsError={execIsError} execResult={execResult} />
      {/* 페이지 이동 시 alert */}
      {/* TODO 제출할 때도 떠버림 ㅅㅂ */}
      <Prompt when={!!input} message={() => '페이지를 나가시겠습니까? 변경사항이 저장되지 않을 수 있습니다.'} />
    </PageWrapper>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}

export default connect(mapStateToProps)(User)

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  line-height: 1.4em;
  padding: 15px;
  border-radius: 5px;
  min-height: 250px;
`

const ProblemWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.SUB_BORDER};
  background: ${(props) => props.theme.INPUT_BACKGROUND};
  border-radius: 5px;
  padding: 15px;
`
