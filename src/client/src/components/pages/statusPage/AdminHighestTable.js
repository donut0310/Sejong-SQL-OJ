import React from 'react'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import acceptIcon from '../../../assets/resultIcons/accept_icon.png'
import errorIcon from '../../../assets/resultIcons/error_icon.png'
import loadingIcon from '../../../assets/resultIcons/loading_icon.png'
import wrongAnswerIcon from '../../../assets/resultIcons/wronganswer_icon.png'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

const AdminHighestTable = () => {
  const { classId, weekId } = useParams()

  const IconResult = ({ result }) => {
    if (result === 'Accept') return <img src={acceptIcon} alt="accept" />
    else if (result === 'WA') return <img src={wrongAnswerIcon} alt="wa" />
    // else if (result === 'Wrong Answer') return <img src={wrongAnswerIcon} alt="wrongAnswer" />
    else if (result === 'Error') return <img src={errorIcon} alt="error" />
    // else if (result === 'error') return <img src={errorIcon} alt="error" />
    else return <img src={loadingIcon} alt="loading" />
  }

  const statusList = [
    { id: '11', name: '김동현', result: 'Accept', score: 100, submit_time: '2020-02-02 00:00:00', isQna: true },
    { id: '12', name: '박동현', result: 'WA', score: 60, submit_time: '2020-02-02 00:00:00', isQna: false },
    { id: '13', name: '최동현', result: 'Accept', score: 100, submit_time: '2020-02-02 00:00:00', isQna: false },
    { id: '14', name: '이동현', result: 'Error', score: 70, submit_time: '2020-02-02 00:00:00', isQna: true },
  ]
  const history = useHistory()

  const handleCodeCheck = (submitId) => {
    // TODO 자신이 조교나 교수일 경우
    history.push(`/${classId}/${weekId}/code/${submitId}`)
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
        {statusList.map((status, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '15%' }}>
              {status.id}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {status.name}
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
              <button
                id="problem"
                onClick={() => {
                  handleCodeCheck(status.submit_id)
                }}
              >
                Code
              </button>
            </li>
            <li id="content" style={{ width: '25%' }}>
              {status.submit_time}
            </li>
            <li id="content" style={{ width: '10%' }}>
              {status.isQna ? <QnaIcon /> : <></>}
            </li>
          </ul>
        ))}
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
