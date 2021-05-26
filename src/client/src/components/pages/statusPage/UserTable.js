import React, { useState } from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import styled from 'styled-components'
import axios from 'axios'
import acceptIcon from '../../../assets/resultIcons/accept_icon.png'
import errorIcon from '../../../assets/resultIcons/error_icon.png'
import loadingIcon from '../../../assets/resultIcons/loading_icon.png'
import wrongAnswerIcon from '../../../assets/resultIcons/wronganswer_icon.png'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

const UserTable = ({ statusList }) => {
  const history = useHistory()
  const { classId, weekId } = useParams()

  const location = useLocation()
  const query = queryString.parse(location.search)
  const userId = query.userId

  const handleCodeCheck = (submitId) => () => {
    history.push(`/${classId}/${weekId}/code/${submitId}`)
  }

  const IconResult = ({ result }) => {
    if (result === 'Accept') return <img src={acceptIcon} alt="accept" style={{ width: '3rem' }} />
    else if (result === 'WA') return <img src={wrongAnswerIcon} alt="wa" style={{ width: '3rem' }} />
    // else if (result === 'Wrong Answer') return <img src={wrongAnswerIcon} alt="wrongAnswer" />
    else if (result === 'Error') return <img src={errorIcon} alt="error" style={{ width: '3rem' }} />
    // else if (result === 'error') return <img src={errorIcon} alt="error" />
    else return <img src={loadingIcon} alt="loading" style={{ width: '3rem' }} />
  }

  const parseDateTime = (data) => {
    const dateTime = new Date(data)
    return dateTime.toISOString().substr(0, 19).replace('T', ' ')
  }

  const handleQNAClick = (submitId) => async () => {
    const data = await axios.post(`/api/v1/user/qna/${submitId}`)
    console.log('이의제기 Toggle', data)
  }

  return (
    <Container>
      <ul id="table-list">
        <ul id="title-tab">
          <li id="content" style={{ width: '8.5%' }}>
            제출번호
          </li>
          <li id="content" style={{ width: '16.5%' }}>
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
        {statusList.map((status, i) => {
          if (i === statusList.length - 1) {
            return (
              <ul id="content-list-last" key={i}>
                <li id="content" style={{ width: '8.5%' }}>
                  {status.submit_id}
                </li>
                <li id="content" style={{ width: '16.5%' }}>
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
                    <button id="problem" onClick={handleCodeCheck(status.submit_id)}>
                      Code
                    </button>
                  ) : (
                    <button id="problem-disable">Code</button>
                  )}
                </li>
                <li id="content" style={{ width: '25%' }}>
                  {parseDateTime(status.submit_time)}
                </li>
                <li id="qna" style={{ width: '10%' }}>
                  {userId === status.user_id && (status.is_objection ? <QnaIcon onClick={handleQNAClick(status.submit_id)} /> : <QnaIconDisabled onClick={handleQNAClick(status.submit_id)} />)}
                </li>
              </ul>
            )
          } else
            return (
              <ul id="content-list" key={i}>
                <li id="content" style={{ width: '8.5%' }}>
                  {status.submit_id}
                </li>
                <li id="content" style={{ width: '16.5%' }}>
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
                    <button id="problem" onClick={handleCodeCheck(status.submit_id)}>
                      Code
                    </button>
                  ) : (
                    <button id="problem-disable">Code</button>
                  )}
                </li>
                <li id="content" style={{ width: '25%' }}>
                  {parseDateTime(status.submit_time)}
                </li>
                <li id="qna" style={{ width: '10%' }}>
                  {userId === status.user_id && (status.is_objection ? <QnaIcon onClick={handleQNAClick(status.submit_id)} /> : <QnaIconDisabled onClick={handleQNAClick(status.submit_id)} />)}
                </li>
              </ul>
            )
        })}
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
    color: ${(props) => props.theme.POINT};
  }
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.GENERAL_FONT};
  }
`
const QnaIconDisabled = styled(HelpOutlineIcon)`
  && {
    font-size: 1.6rem;
    color: ${(props) => props.theme.GENERAL_FONT};
  }
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.POINT};
  }
`
