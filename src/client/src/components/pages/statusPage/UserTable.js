import React, { useState } from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import styled from 'styled-components'
import acceptIcon from '../../../assets/resultIcons/accept_icon.png'
import errorIcon from '../../../assets/resultIcons/error_icon.png'
import loadingIcon from '../../../assets/resultIcons/loading_icon.png'
import wrongAnswerIcon from '../../../assets/resultIcons/wronganswer_icon.png'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { Popper } from '@material-ui/core'

const UserTable = ({ statusList }) => {
  const history = useHistory()
  const { classId, weekId } = useParams()

  const location = useLocation()
  const query = queryString.parse(location.search)
  const userId = query.userId

  const handleCodeCheck = (submitId) => {
    // TODO 자신이 조교나 교수일 경우
    history.push(`/${classId}/${weekId}/code/${submitId}`)
  }

  const [anchorEl, setAnchorEl] = useState(null)

  const handleQNAClick = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget)
  }

  const openQNA = Boolean(anchorEl)

  const IconResult = ({ result }) => {
    if (result === 'Accept') return <img src={acceptIcon} alt="accept" />
    else if (result === 'WA') return <img src={wrongAnswerIcon} alt="wa" />
    // else if (result === 'Wrong Answer') return <img src={wrongAnswerIcon} alt="wrongAnswer" />
    else if (result === 'Error') return <img src={errorIcon} alt="error" />
    // else if (result === 'error') return <img src={errorIcon} alt="error" />
    else return <img src={loadingIcon} alt="loading" />
  }
  const parseDateTime = (data) => {
    const dateTime = new Date(data)
    return dateTime.toISOString().substr(0, 19).replace('T', ' ')
  }

  return (
    <Container>
      <ul id="table-list">
        <ul id="title-tab">
          <li id="content" style={{ width: '10%' }}>
            제출번호
          </li>
          <li id="content" style={{ width: '15%' }}>
            아이디
          </li>
          <li id="content" style={{ width: '10%' }}>
            결과
          </li>
          <li id="content" style={{ width: '20%' }}>
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
        </ul>
        {statusList.map((status, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '10%' }}>
              {status.submit_id}
            </li>
            <li id="content" style={{ width: '15%' }}>
              {status.user_id}
            </li>
            <li id="content" style={{ width: '10%' }}>
              <IconResult result={status.result} />
            </li>
            <li id="content" style={{ width: '20%' }}>
              {status.score === 100 ? (
                <>
                  <span style={{ color: 'green' }}>{status.score}</span> / 100
                </>
              ) : (
                <>
                  <span style={{ color: 'red' }}>{status.score}</span> / 100
                </>
              )}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {status.user_id === userId ? (
                <button
                  id="problem"
                  onClick={() => {
                    handleCodeCheck(status.submit_id)
                  }}
                >
                  Code
                </button>
              ) : (
                <button id="problem" style={{ textDecoration: 'line-through', color: 'gray', cursor: 'default' }}>
                  Code
                </button>
              )}
            </li>
            <li id="content" style={{ width: '25%' }}>
              {parseDateTime(status.submit_time)}
            </li>
            <li id="qna" style={{ width: '10%' }}>
              {userId === status.user_id && (
                <>
                  <QnaIcon onClick={handleQNAClick} />
                  <Popper open={openQNA} anchorEl={anchorEl}>
                    <StyledPopper>성적 이의제기</StyledPopper>
                  </Popper>
                </>
              )}
            </li>
          </ul>
        ))}
      </ul>
    </Container>
  )
}

export default UserTable

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
