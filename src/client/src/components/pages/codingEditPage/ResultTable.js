import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ResultTable = ({ execResult }) => {
  const [attributes, setAttributes] = useState([])

  useEffect(() => {
    console.log('execResult', execResult)
  }, [])

  useEffect(() => {
    const temp = []
    for (let i in execResult[0]) temp.push(i)
    setAttributes(temp)
    console.log(attributes)
  }, [, execResult])

  return (
    <Table>
      <ul id="table-table-list" style={{ margin: '0' }}>
        <ul id="table-title-tab" style={{ marginTop: '5px' }}>
          {attributes.map((attribute, j) => (
            <li id="table-content" key={j}>
              {attribute}
            </li>
          ))}
        </ul>
        {execResult.map((row, j) => (
          <ul id="table-content-list-coding" key={j}>
            {attributes.map((attribute, k) => (
              <li id="table-content" key={k}>
                {row[attribute]}
              </li>
            ))}
          </ul>
        ))}
      </ul>
    </Table>
  )
}

export default ResultTable

const Table = styled.div`
  display: flex;
  margin-bottom: 20px;
`
