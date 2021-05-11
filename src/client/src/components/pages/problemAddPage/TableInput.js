import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const TableInput = ({ defaultRowCnt, defaultColCnt, attributes, setAttributes, instance, setInstance }) => {
  return (
    <Wrapper>
      테이블
      <TableWrapper>
        {[...Array(defaultRowCnt)].map((a, i) => {
          return (
            <>
              {i === 0 ? (
                // attributes
                <RowWrapper>
                  {[...Array(defaultColCnt)].map((a, j) => (
                    <AttributeInput
                      value={attributes[j]}
                      onChange={(e) => {
                        setAttributes(
                          attributes.map((a, index) => {
                            return index === j ? e.target.value : a
                          })
                        )
                      }}
                    />
                  ))}
                </RowWrapper>
              ) : (
                // instance
                <RowWrapper>
                  {[...Array(defaultColCnt)].map((a, j) => (
                    <InstanceInput
                      value={instance[i - 1][j]}
                      onChange={(e) => {
                        setInstance(
                          instance.map((a, rowIndex) => {
                            return rowIndex === i - 1 ? a.map((b, colIndex) => (colIndex === j ? e.target.value : b)) : a
                          })
                        )
                      }}
                    />
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
