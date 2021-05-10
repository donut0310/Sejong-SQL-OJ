import React, { useState } from 'react'
import styled from 'styled-components'

// TODO 내용 수정 가능한 테이블 작성 add row col 버튼 ㄷㅏ시 잘 생각해바..

const TableInput = () => {
  const handleTableChange = (e) => {
    // let copy = [...tableInfo]
    // copy[row][column] = +event.target.value
    // setTableInfo(copy)
    console.log(e.target.value)
  }

  const [tableCols, setTableCols] = useState([])
  const [tableInfo, setTableInfo] = useState([[<StyledInput type="text" placeholder="입력하세요" onChange={handleTableChange} />]])

  const handleAddCol = () => {
    console.log('Add column')

    setTableInfo([[...tableInfo, <StyledInput type="text" placeholder="입력하세요" />]])
    setTableCols([tableInfo])
    console.log(tableInfo)
  }

  const handleAddRow = () => {
    console.log('Add row')
    setTableInfo([[...tableInfo], tableCols])
    console.log(tableInfo)
  }

  return (
    <Container>
      <div style={{ display: 'flex', padding: '0 0 0 20px', justifyContent: 'space-between', alignItems: 'center', fontWeight: '500' }}>
        <span style={{ paddingTop: '5px' }}>테이블 입력</span>
        <div>
          <button id="submit-btn" onClick={handleAddCol}>
            열 추가
          </button>
          <button id="submit-btn" onClick={handleAddRow}>
            행 추가
          </button>
        </div>
      </div>

      <ul id="table-list" style={{ margin: '10px 0' }}>
        <ul id="content-list" style={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
          {tableInfo.map((row, rowIndex) => (
            <ul id="content" key={rowIndex} style={{ display: 'flex', flexDirection: 'row' }}>
              {row.map((column, columnIndex) => (
                <li id="content" key={columnIndex}>
                  {column}
                </li>
              ))}
            </ul>
          ))}
        </ul>
      </ul>
    </Container>
  )
}

export default TableInput

const Container = styled.div`
  box-sizing: border-box;
`
const StyledInput = styled.input`
  background: ${(props) => props.theme.BOARD_TITLE};
  color: ${(props) => props.theme.GENERAL_FONT};
  padding: 5px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  &:focus {
    outline: 0;
  }
`
