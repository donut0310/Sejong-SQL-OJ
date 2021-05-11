import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// TODO
import Problem from '../codingPage/Problem'

const Preview = ({ description, tableInfo }) => {
  const [p, setP] = useState([])
  const [pCnt, setPCnt] = useState(0)

  useEffect(() => {
    setP(description.split('^&^'))
    setPCnt(p.length)
  }, [, description])

  return (
    <Wrapper id="preview-wrapper">
      <span style={{ paddingTop: '5px', fontWeight: '500' }}>미리보기</span>
      <ContentWrapper>{description === '' ? '내용이 표시됩니다.' : <Problem table_info={tableInfo} paragraph={p} paragraphCnt={pCnt} />}</ContentWrapper>
    </Wrapper>
  )
}

export default Preview

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`

const ContentWrapper = styled.div`
  box-sizing: border-box;
  line-height: 1.5em;
  padding: 15px;
  border-radius: 5px;
  background: ${(props) => props.theme.BOARD_LIST_HOVER};
`
