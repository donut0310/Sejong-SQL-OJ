import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Problem = ({ paragraph, paragraphCnt, table_info }) => {
  console.log('Problem) table_info=>', table_info)

  const [attributes, setAttributes] = useState([])

  useEffect(() => {
    table_info.map((t, i) => {
      let temp = []
      for (let j in t[0]) temp.push(j)
      setAttributes([attributes, temp])
    })
    console.log('changed attributes', attributes)
  }, [table_info])

  const generateTable = (table_info) => {
    let attributes = []
    for (let i in table_info[0]) attributes.push(i)

    return (
      <ul id="table-list" style={{ margin: '0', width: 'auto' }}>
        <ul id="title-tab" style={{ marginTop: '5px' }}>
          {attributes.map((attribute, j) => (
            <li id="content" style={{ width: '20%' }} key={j}>
              {attribute}
            </li>
          ))}
        </ul>
        {table_info.map((row, j) => (
          <ul id="content-list" key={j}>
            {attributes.map((attribute, k) => (
              <li id="content" style={{ width: '20%' }} key={k}>
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
      {paragraph.map((text, i) => (
        <div key={i}>
          <Text>{text}</Text>
          <Table>
            {i + 1 < paragraphCnt && (
              // generateTable(table_info[i])
              <ul id="table-list" style={{ margin: '0', width: 'auto' }}>
                <ul id="title-tab" style={{ marginTop: '5px' }}>
                  {attributes[i].map((attribute, j) => (
                    <li id="content" style={{ width: '20%' }} key={j}>
                      {attribute}
                    </li>
                  ))}
                </ul>
                {table_info.map((row, j) => (
                  <ul id="content-list" key={j}>
                    {attributes[i].map((attribute, k) => (
                      <li id="content" style={{ width: '20%' }} key={k}>
                        {row[attribute]}
                      </li>
                    ))}
                  </ul>
                ))}
              </ul>
            )}
          </Table>
        </div>
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
