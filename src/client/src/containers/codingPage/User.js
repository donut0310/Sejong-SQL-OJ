import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import Code from '../../components/pages/codingPage/Code'
import Problem from '../../components/pages/codingPage/Problem'
import Result from '../../components/pages/codingPage/Result'

const User = ({ user }) => {
  const history = useHistory()
  const { classId, weekId, pId } = useParams()

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

  // Result.js
  const [execIsLoading, setExecIsLoading] = useState(false)
  const [execIsError, setExecIsError] = useState(false)
  const [execResult, setExecResult] = useState('')

  // TODO
  const input = 'select * from aaa'

  const handleExecCode = () => {
    ;(async () => {
      const { data } = await axios.post(`/api/v1/user/code/exec/${pId}`, { user_query: input })
      // data => result: {is_error, err_msg, exec_result}, message: "success"
      console.log('handleExecCode data=> ', data)

      // TODO
    })()
  }

  const handleSubmitCode = () => {
    history.push(`/${classId}/${weekId}/status?userId=${user.id}&pId=${pId}`)
    ;(async () => {
      const { data } = await axios.post(`/api/v1/user/code/submit/${pId}`, { user_query: input })
      // data => message: string
      console.log('handleSubmitCode=> ', data)
    })()
  }

  // TODO
  //
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
      setProblemInfo({ ...problemInfo, className: problem.class_name, weekName: problem.week_name, problemName: problem.title })

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
      {!isLoading && <Problem table_info={table_info} paragraph={paragraph} paragraphCnt={paragraphCnt} />}
      <Subtitle subtitle={'코드 작성'} />
      <Code handleExecCode={handleExecCode} handleSubmitCode={handleSubmitCode} />
      <Subtitle subtitle={'실행 결과'} />
      <Result execIsLoading={execIsLoading} execIsError={execIsError} execResult={execResult} />
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
