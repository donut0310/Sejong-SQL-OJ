import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

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
      <TitleContainer>
        <Arrow />
        미리보기
      </TitleContainer>
      <ContentWrapper>{description === '' ? '내용이 표시됩니다.' : <Problem id="preview" table_info={tableInfo} paragraph={p} paragraphCnt={pCnt} />}</ContentWrapper>
    </Wrapper>
  )
}

export default Preview

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`

const TitleContainer = styled.div`
  margin: 10px 0;
  font-size: 1em;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
`

const Arrow = styled(ArrowForwardIosIcon)`
  && {
    width: 0.5em;
    margin-right: 5px;
    margin-bottom: 5px;
  }
`

const ContentWrapper = styled.div`
  box-sizing: border-box;
  line-height: 1.5em;
  padding: 15px;
  border-radius: 5px;
  background: ${(props) => props.theme.HEADER_BACKGROUND};
  border: 1px solid ${(props) => props.theme.SUB_BORDER};
`
