import React from 'react'
import styled from 'styled-components'

const Problem = () => {
  const dummyData_contents = '아래 테이블 구조는 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. 동물 보호소에 가장 먼저 들어온 동물의 이름 3개를 조회하는 SQL 문을 작성해주세요.'
  const dummyData_table = [
    { id: '1', name: 'Gob', value: '2' },
    { id: '2', name: 'Buster', value: '5' },
    { id: '3', name: 'George Michael', value: '4' },
  ]

  const GenerateTable = (table_info) => {
    let attributes = []
    for (let i in table_info[0]) attributes.push(i)

    return (
      <ul id="table-list" style={{ margin: '0', width: 'auto' }}>
        <ul id="title-tab" style={{ marginTop: '5px' }}>
          {attributes.map((attribute, i) => (
            <li id="content" key={i} style={{ width: '20%' }}>
              {attribute}
            </li>
          ))}
        </ul>
        {dummyData_table.map((row, i) => (
          <ul id="content-list" key={i}>
            {attributes.map((attribute, j) => (
              <li id="content" key={j} style={{ width: '20%' }}>
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
      <div style={{ lineHeight: '1.5em' }}>{dummyData_contents}</div>
      {GenerateTable(dummyData_table)}
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
