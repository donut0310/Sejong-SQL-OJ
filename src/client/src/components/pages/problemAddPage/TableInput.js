import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const TableInput = ({ tableInput, setTableInput }) => {
  // TODO 범위
  const defaultRowCnt = 8
  const defaultColCnt = 8

  const [attributes, setAttributes] = useState(() => {
    const temp = []
    for (let i = 0; i < defaultColCnt; i++) temp.push('')

    return temp
  })

  const [instance, setInstance] = useState(() => {
    const temp = []

    for (let i = 1; i < defaultRowCnt; i++) {
      let row = []
      for (let j = 0; j < defaultColCnt; j++) row.push('')
      temp.push(row)
    }

    return temp
  })

  // TODO
  const ex = [
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

  const handlePrintBtn = () => {
    for (let i = 0; i < defaultRowCnt; i++) {
      let temp = []
      for (let j = 0; j < defaultColCnt; j++) {
        if (i === 0) temp.push(attributes[j])
        else temp.push(instance[i - 1][j])
      }
      console.log(temp)
    }
  }

  return (
    <Wrapper>
      테이블
      <div onClick={handlePrintBtn}>출력</div>
      <TableWrapper>
        {[...Array(defaultRowCnt)].map((a, i) => {
          return (
            <>
              {i === 0 ? (
                // ! attributes
                <RowWrapper>
                  {[...Array(defaultColCnt)].map((a, j) => (
                    <AttributeInput
                      onChange={(e) => {
                        setAttributes(
                          attributes.map((a, index) => {
                            return index === j ? e.target.value : a
                          })
                        )
                        console.log(i, j, attributes[j])
                      }}
                    />
                  ))}
                </RowWrapper>
              ) : (
                // ! instance
                <RowWrapper>
                  {[...Array(defaultColCnt)].map((a, j) => (
                    // ! -----------------------
                    <InstanceInput
                      onChange={(e) => {
                        setInstance(
                          instance.map((a, rowIndex) => {
                            return rowIndex === i - 1 ? a.map((b, colIndex) => (colIndex === j ? e.target.value : b)) : a
                          })
                        )
                        console.log(i, j, instance[i - 1][j])
                      }}
                    />
                    // ! -----------------------
                  ))}
                </RowWrapper>
              )}
            </>
          )
        })}
      </TableWrapper>
    </Wrapper>
  )
}

export default TableInput

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 5px;
`

const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const RowWrapper = styled.div`
  width: 100%;
  display: flex;
`

const AttributeInput = styled.input`
  width: 100%;
  height: 25px;
  border: 1px solid black;
  display: flex;

  background: ${(props) => props.theme.INPUT_TABLE_TITLE};
  color: ${(props) => props.theme.GENERAL_FONT};

  font-weight: bold;
  text-align: center;

  :focus {
    outline: none;
  }
`

const InstanceInput = styled.input`
  width: 100%;
  height: 25px;
  border: 1px solid black;
  display: flex;

  background: ${(props) => props.theme.INPUT_TABLE_CONTENTS};
  color: ${(props) => props.theme.GENERAL_FONT};

  text-align: center;

  :focus {
    outline: none;
  }
`

// background: ${(props) => props.theme.BOARD_TITLE};
// color: ${(props) => props.theme.GENERAL_FONT};
// &:focus {
//   outline: 0;
// }
