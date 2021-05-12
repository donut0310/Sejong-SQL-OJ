import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Problem = ({ paragraph, paragraphCnt, table_info }) => {
  const [attributes, setAttributes] = useState([])

  useEffect(() => {
    console.log('paragraph', paragraph)
    console.log('paragraphCnt', paragraphCnt)
    console.log('table_info', table_info)
  }, [])

  useEffect(() => {
    const a = []
    table_info.forEach((t) => {
      let temp = []
      for (let i in t[0]) temp.push(i)
      a.push(temp)
    })

    setAttributes(a)
  }, [table_info, paragraph, paragraphCnt])

  const Contents = paragraph.map((p, i) => {
    return i === 0 ? (
      <>
        <Text>
          {p.split('\n').map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            )
          })}
        </Text>
      </>
    ) : (
      <>
        <Table>
          <ul id="table-table-list" style={{ margin: '0' }}>
            <ul id="table-title-tab" style={{ marginTop: '5px' }}>
              {attributes[i - 1].map((attribute, j) => (
                <li id="table-content" key={j}>
                  {attribute}
                </li>
              ))}
            </ul>
            {table_info[i - 1].map((row, j) => (
              <ul id="table-content-list" key={j}>
                {attributes[i - 1].map((attribute, k) => (
                  <li id="table-content" key={k}>
                    {row[attribute]}
                  </li>
                ))}
              </ul>
            ))}
          </ul>
        </Table>
        <Text>{p}</Text>
      </>
    )
  })

  return <ProblemWrapper id="problem">{Contents}</ProblemWrapper>
}

export default Problem

const ProblemWrapper = styled.div`
  .problem {
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    background: ${(props) => props.theme.EDITOR_BACKGROUND};
    color: ${(props) => props.theme.GENERAL_FONT};
  }
`

const Text = styled.div`
  line-height: '1.5em';
  margin-bottom: 20px;
`

const Table = styled.div`
  display: flex;
  /* width: 100%; */
  margin-bottom: 20px;
`
