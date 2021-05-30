import React, { useState } from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import styled from 'styled-components'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import AdminLi from './AdminLi'

const AdminTable = ({ statusList, isChanged, setIsChanged }) => {
  const history = useHistory()
  const { classId, weekId } = useParams()

  const location = useLocation()
  const query = queryString.parse(location.search)

  return (
    <Container>
      <ul id="table-list">
        <ul id="title-tab">
          <li id="content" style={{ width: '8.5%' }}>
            제출번호
          </li>
          <li id="content" style={{ width: '21.5%' }}>
            아이디
          </li>
          <li id="content" style={{ width: '10%' }}>
            결과
          </li>
          <li id="content" style={{ width: '10%' }}>
            점수
          </li>
          <li id="content" style={{ width: '10%' }}>
            코드
          </li>
          <li id="content" style={{ width: '25%' }}>
            제출시각
          </li>
          <li id="qna" style={{ width: '10%' }}>
            이의제기
          </li>
          <li id="content" style={{ width: '5%' }}>
            수정
          </li>
        </ul>
        {statusList.map((status, i) => (
          <AdminLi isChanged={isChanged} setIsChanged={setIsChanged} status={status} key={i} />
        ))}
      </ul>
    </Container>
  )
}

export default AdminTable

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const QnaIcon = styled(HelpOutlineIcon)`
  && {
    font-size: 1.6rem;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.POINT};
  }
`

const StyledPopper = styled.div`
  background: white;
  padding: 10px;
  margin: 5px;
`
