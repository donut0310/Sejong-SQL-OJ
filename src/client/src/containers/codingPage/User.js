import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Title from '../../components/title/Title'
import SubTitle from '../../components/pages/codingPage/SubTitle'
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
  const [table_info, setTable_info] = useState([{ id: 'hi' }])
  const [paragraph, setParagraph] = useState(['asdasd'])
  const [paragraphCnt, setParagraphCnt] = useState(0)

  // dummy data
  const dummyData_content = '아래 테이블 구조는 동물 보호소에 들어온 동물의 정보를 담은  ^&^  테이블입니다. 동물 보호소에 가장 먼저 들어온 동물의 이름 3개를 조회하는 SQL 문을 작성해주세요. ^&^'
  const dummyData_table = [
    [
      { id: '1', name: 'Gob', value: '2' },
      { id: '2', name: 'Buster', value: '5' },
      { id: '3', name: 'George Michael', value: '4' },
    ],
    [
      { id: '1', name: 'Gob', value: '2', cnt: '5' },
      { id: '2', name: 'Buster', value: '5', cnt: '5' },
      { id: '3', name: 'George asdsadsadasdasMichael', value: '4', cnt: '5' },
    ],
  ]
  //

  // ! Code component에서 사용

  // WIP
  useEffect(() => {
    // console.log(JSON.stringify(dummyData_table))
    // console.log(JSON.parse(JSON.stringify(dummyData_table)))
    console.log('useEffect 실행')
    ;(async () => {
      setIsLoading(true)

      // TODO
      const pId = '1'
      const { data } = await axios.get(`/api/v1/user/problem/${pId}`)
      console.log('codingpage get problem info =>', data)

      // const data = {
      //   content: dummyData_content,
      //   table_info: dummyData_table,
      // }

      await setTable_info(data.table_info)
      await setTable_info(dummyData_table)
      // const data = { content: dummyData_content, table_info: JSON.parse(dummyData_table) }

      await setParagraph(data.content.split('^&^'))
      await setParagraphCnt(paragraph.length)

      // if (!data.isSuccess) {
      // } else {
      //   setPost(data.post)
      // }

      setIsLoading(false)
      console.log(data)
      console.log('paragraph=>', paragraph)
      console.log('table_info=>', table_info)

      console.log('useEffect 종료')
    })()
  }, [])

  return (
    <PageWrapper>
      <Title problemInfo={problemInfo} />
      <SubTitle name="문제 내용" />
      {!isLoading && <Problem table_info={table_info} paragraph={paragraph} paragraphCnt={paragraphCnt} />}
      <SubTitle name="코드 작성" />
      <Code />
      <SubTitle name="실행 결과" />
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
