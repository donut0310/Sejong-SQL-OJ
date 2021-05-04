import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Problem = () => {
  const [isLoading, setIsLoading] = useState(false)

  // ! dummy data
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
  // !

  const [table_info, setTable_info] = useState([])
  const [paragraph, setParagraph] = useState([])
  const [paragraphCnt, setParagraphCnt] = useState(0)

  // WIP
  // console.log(JSON.parse(JSON.stringify(dummyData_table)))
  useEffect(() => {
    console.log('useEffect 실행')
    ;(async () => {
      setIsLoading(true)

      // TODO
      const pId = 'test'
      // const { data } = await axios.get(`/api/v1/user/problem/${pId}`)
      const data = {
        content: dummyData_content,
        table_info: JSON.stringify(dummyData_table),
      }

      setTable_info(JSON.parse(data.table_info))
      // const data = { content: dummyData_content, table_info: JSON.parse(dummyData_table) }

      setParagraph(data.content.split('^&^'))
      setParagraphCnt(paragraph.length)

      // if (!data.isSuccess) {
      // } else {
      //   setPost(data.post)
      // }

      setTimeout(() => {
        setIsLoading(false)
        console.log(data)
        console.log(paragraph)
        console.log(table_info)

        console.log('useEffect 종료')
      }, 2000)
    })()
  }, [])

  const GenerateTable = (table_info) => {
    let attributes = []
    for (let i in table_info[0]) attributes.push(i)

    return (
      <ul id="table-list" style={{ margin: '0', width: 'auto' }}>
        <ul id="title-tab" style={{ marginTop: '5px' }}>
          {attributes.map((attribute, i) => (
            <li id="content" style={{ width: '20%' }}>
              {attribute}
            </li>
          ))}
        </ul>
        {table_info.map((row, i) => (
          <ul id="content-list">
            {attributes.map((attribute, j) => (
              <li id="content" style={{ width: '20%' }}>
                {row[attribute]}
              </li>
            ))}
          </ul>
        ))}
      </ul>
    )
  }

  return (
    <ProblemWrapper>
      {!isLoading &&
        paragraph &&
        paragraph.map((text, i) => (
          <>
            <Text>{text}</Text>
            <Table>{i + 1 < paragraphCnt && GenerateTable(table_info[i])}</Table>
          </>
        ))}
    </ProblemWrapper>
  )
}

export default Problem

const ProblemWrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  background: ${(props) => props.theme.EDITOR_BACKGROUND};
  color: ${(props) => props.theme.GENERAL_FONT};
`

const Text = styled.div`
  line-height: '1.5em';
  margin-bottom: 20px;
`

const Table = styled.div`
  margin-bottom: 20px;
`
