import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import Code from '../../components/pages/codingPage/Code'
import Problem from '../../components/pages/codingPage/Problem'
import Result from '../../components/pages/codingPage/Result'

const User = () => {
  const problemInfo = {
    classInfo: '데이터베이스1(김지환)',
    weekInfo: '7주차 실습',
    problemInfo: '동물 보호소',
    startTime: 'Infinite',
    endTime: 'Infinite',
  }

  // ! Problem component에서 사용
  const [isLoading, setIsLoading] = useState(false)
  const [table_info, setTable_info] = useState([])
  const [paragraph, setParagraph] = useState([])
  const [paragraphCnt, setParagraphCnt] = useState(0)

  // ! Code component에서 사용
  // TODO
  //
  useEffect(() => {
    console.log('useEffect 실행')
    ;(async () => {
      setIsLoading(true)

      // WIP
      const pId = '1'
      const { data } = await axios.get(`/api/v1/problem/${pId}`)
      console.log('codingpage get problem info data.result[0] =>', data.result[0])
      const problem = data.result[0]

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
      <Code />
      <Subtitle subtitle={'실행 결과'} />
      <Result />
    </PageWrapper>
  )
}

export default User

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
