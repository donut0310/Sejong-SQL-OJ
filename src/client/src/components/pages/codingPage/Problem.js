import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Problem = ({ paragraph, paragraphCnt, table_info }) => {
  // console.log('Problem) table_info=>', table_info)

  const [attributes, setAttributes] = useState([])

  useEffect(() => {
    const a = []
    table_info.forEach((t) => {
      // console.log('테이블 개수만큼 반복')
      let temp = []
      for (let i in t[0]) {
        temp.push(i)
      }
      a.push(temp)
    })

    console.log(a)
    setAttributes(a)
  }, [table_info, paragraph, paragraphCnt])

  useEffect(() => {
    // console.log('changed attributes', attributes)
  }, [attributes])

  const GenerateTable = (index, table_info) => {
    console.log(attributes)

    return (
      <ul id="table-list" style={{ margin: '0', width: 'auto' }}>
        <ul id="title-tab" style={{ marginTop: '5px' }}>
          {attributes[index].map((attribute, j) => (
            <li id="content" style={{ width: '20%' }} key={j}>
              {attribute}
            </li>
          ))}
        </ul>
        {table_info.map((row, j) => (
          <ul id="content-list" key={j}>
            {attributes[index].map((attribute, k) => (
              <li id="content" style={{ width: '20%' }} key={k}>
                {row[attribute]}
              </li>
            ))}
          </ul>
        ))}
      </ul>
    )
  }
  //

  const Contents = paragraph.map((p, i) => (
    <>
      {attributes !== [] ? (
        <Text>{p}</Text>
      ) : (
        <Table>
          <GenerateTable index={i - 1} table_info={table_info[i - 1]} />
        </Table>
      )}
    </>
  ))

  return <ProblemWrapper>{paragraphCnt > 1 && Contents}</ProblemWrapper>
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
