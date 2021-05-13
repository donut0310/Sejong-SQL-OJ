import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Preview from './Preview'
import ContentInput from './ContentInput'
import TableInput from './TableInput'

const DescriptionInput = ({ contentInput, setContentInput, tableInfo, setTableInfo }) => {
  const [description, setDescription] = useState('')
  // 보낼 때 stringify

  const handleApplyContent = () => {
    setDescription(description + contentInput + '\n')
    setContentInput('')
  }

  // Table Input 관련-----------
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

  const handleApplyTable = () => {
    // 1-1: attributes 확인 rangeX 범위 지정
    // 1-2: instance 확인 rangeY 범위 지정
    // 2: instance 돌면서 temp에 {key: value, ...} push
    // 3-1: push to tableInfo
    // 3-2: description ^&^ 추가
    // 4: table 비우기

    // TODO 에러 처리

    let rangeX = 0
    let rangeY = 0
    const temp = []

    // 1-1
    for (let i = 0; i < defaultColCnt; ++i) {
      if (attributes[i] === '') break
      else rangeX += 1
    }

    // 1-2
    for (let i = 0; i < defaultRowCnt; ++i) {
      if (instance[i][0] === '') break
      else rangeY += 1
    }

    console.log('attrub', attributes)

    // 2
    for (let i = 0; i < rangeY; i++) {
      let tempRow = {}
      for (let j = 0; j < rangeX; j++) tempRow[attributes[j]] = instance[i][j]
      temp.push(tempRow)
    }

    // 3-1
    const newTableInfo = [...tableInfo]
    newTableInfo.push(temp)
    setTableInfo(newTableInfo)

    // 3-2
    setDescription(description + '^&^')

    // 4
    setAttributes(() => {
      const temp = []
      for (let i = 0; i < defaultColCnt; i++) temp.push('')
      return temp
    })

    setInstance(() => {
      const temp = []
      for (let i = 1; i < defaultRowCnt; i++) {
        let row = []
        for (let j = 0; j < defaultColCnt; j++) row.push('')
        temp.push(row)
      }
      return temp
    })
  }

  useEffect(() => {
    console.log('update tableInfo =>', tableInfo)
    console.log('update description =>', description)
  }, [tableInfo])

  // -----------Table Input 관련

  return (
    <Wrapper>
      <TitleContainer>문제 내용</TitleContainer>
      <ContentContainer>
        <Preview description={description} tableInfo={tableInfo} />
        <ContentInput contentInput={contentInput} setContentInput={setContentInput} />
        <div style={{ paddingRight: '10px', textAlign: 'end' }}>
          <button id="submit-btn" onClick={handleApplyContent}>
            적용
          </button>
        </div>
        <TableInput defaultRowCnt={defaultRowCnt} defaultColCnt={defaultColCnt} attributes={attributes} setAttributes={setAttributes} instance={instance} setInstance={setInstance} />
        <div style={{ paddingRight: '10px', textAlign: 'end' }}>
          <button id="submit-btn" onClick={handleApplyTable}>
            적용
          </button>
        </div>
      </ContentContainer>
    </Wrapper>
  )
}

export default DescriptionInput

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 60px;
  box-sizing: border-box;
`

const TitleContainer = styled.div`
  margin-bottom: 10px;
  font-size: 1.4em;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
const ContentContainer = styled.div`
  border: 1px solid ${(props) => props.theme.SUB_BORDER};
  background: ${(props) => props.theme.INPUT_BACKGROUND};
  border-radius: 5px;
  padding: 10px 0 20px 0;
`
