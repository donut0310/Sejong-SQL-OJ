import React from 'react'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import acceptIcon from '../../../assets/resultIcons/accept_icon.png'
import errorIcon from '../../../assets/resultIcons/error_icon.png'
import loadingIcon from '../../../assets/resultIcons/loading_icon.png'
import wrongAnswerIcon from '../../../assets/resultIcons/wronganswer_icon.png'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import moment from 'moment'

const AdminHighestTable = ({ statusList, classId, weekId }) => {
  const IconResult = ({ result }) => {
    if (result === 'Accept') return <img src={acceptIcon} alt="accept" style={{ width: '3rem' }} />
    else if (result === 'WA') return <img src={wrongAnswerIcon} alt="wa" style={{ width: '3rem' }} />
    // else if (result === 'Wrong Answer') return <img src={wrongAnswerIcon} alt="wrongAnswer" />
    else if (result === 'Error') return <img src={errorIcon} alt="error" style={{ width: '3rem' }} />
    // else if (result === 'error') return <img src={errorIcon} alt="error" />
    else return <img src={loadingIcon} alt="loading" style={{ width: '3rem' }} />
  }

  const history = useHistory()

  const handleCodeCheck = (submitId) => () => {
    history.push(`/${classId}/${weekId}/code/${submitId}`)
  }
  const parseDateTime = (data) => {
    const dateTime = new Date(data).toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
    return moment(dateTime).format('YYYY-MM-DD HH:mm:ss')
  }

  return (
    <Container>
      <ul id="table-list">
        <ul id="title-tab">
          <li id="content" style={{ width: '15%' }}>
            아이디
          </li>
          <li id="content" style={{ width: '10%' }}>
            이름
          </li>
          <li id="content" style={{ width: '15%' }}>
            결과
          </li>
          <li id="content" style={{ width: '15%' }}>
            점수
          </li>
          <li id="content" style={{ width: '10%' }}>
            코드
          </li>
          <li id="content" style={{ width: '25%' }}>
            제출시각
          </li>
          <li id="content" style={{ width: '10%' }}>
            이의제기
          </li>
        </ul>
        {statusList.map((status, i) => {
          if (i === statusList.length - 1) {
            return (
              <ul id="content-list-last" key={i}>
                <li id="content" style={{ width: '15%' }}>
                  {status.user_id}
                </li>
                <li id="content" style={{ width: '10%' }}>
                  {status.user_name}
                </li>
                <li id="content" style={{ width: '15%' }}>
                  <IconResult result={status.result} />
                </li>
                <li id="content" style={{ width: '15%' }}>
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
                  <button id="problem" onClick={handleCodeCheck(status.submit_id)}>
                    Code
                  </button>
                </li>
                <li id="content" style={{ width: '25%' }}>
                  {parseDateTime(status.submit_time)}
                </li>
                <li id="content" style={{ width: '10%' }}>
                  {status.isQna ? <QnaIcon /> : <></>}
                </li>
              </ul>
            )
          } else
            return (
              <ul id="content-list" key={i}>
                <li id="content" style={{ width: '15%' }}>
                  {status.user_id}
                </li>
                <li id="content" style={{ width: '10%' }}>
                  {status.user_name}
                </li>
                <li id="content" style={{ width: '15%' }}>
                  <IconResult result={status.result} />
                </li>
                <li id="content" style={{ width: '15%' }}>
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
                  <button id="problem" onClick={handleCodeCheck(status.submit_id)}>
                    Code
                  </button>
                </li>
                <li id="content" style={{ width: '25%' }}>
                  {parseDateTime(status.submit_time)}
                </li>
                <li id="content" style={{ width: '10%' }}>
                  {status.isQna ? <QnaIcon /> : <></>}
                </li>
              </ul>
            )
        })}
      </ul>
    </Container>
  )
}

export default AdminHighestTable

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
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
