import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Problem = ({ paragraph, paragraphCnt, table_info }) => {
  console.log('Problem) table_info=>', table_info)

  const generateTable = (table_info) => {
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
      {paragraph.map((text, i) => (
        <>
          <Text>{text}</Text>
          <Table>{i + 1 < paragraphCnt && generateTable(table_info[i])}</Table>
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
