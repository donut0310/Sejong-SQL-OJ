import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import acceptIcon from '../../../assets/resultIcons/accept_icon.png'
import errorIcon from '../../../assets/resultIcons/error_icon.png'
import loadingIcon from '../../../assets/resultIcons/loading_icon.png'
import wrongAnswerIcon from '../../../assets/resultIcons/wronganswer_icon.png'

const UserTable = () => {
  const classId = 1
  const weekId = 1
  const submitId = 1

  const history = useHistory()

  const scores = [
    { submit_id: '4', id: '16010000', result: 'loading', score: '100', submit_time: '2000-01-01 00:00:00' },
    { submit_id: '3', id: '17010000', result: 'accept', score: '100', submit_time: '2000-01-01 00:00:00' },
    { submit_id: '2', id: '18010000', result: 'wa', score: '30', submit_time: '2000-01-01 00:00:00' },
    { submit_id: '1', id: '19010000', result: 'error', score: '100', submit_time: '2000-01-01 00:00:00' },
  ]

  const handleCodeCheck = () => {
    history.push(`/${classId}/${weekId}/code/${submitId}`)
    // TODO 자기 코드만 볼 수 있어야함.
  }

  const IconResult = ({ result }) => {
    if (result === 'accept') return <img src={acceptIcon} alt="accept" />
    else if (result === 'wa') return <img src={wrongAnswerIcon} alt="accept" />
    else if (result === 'error') return <img src={errorIcon} alt="accept" />
    else if (result === 'loading') return <img src={loadingIcon} alt="accept" />
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
          <li id="content" style={{ width: '15%' }}>
            결과
          </li>
          <li id="content" style={{ width: '20%' }}>
            점수
          </li>
          <li id="content" style={{ width: '10%' }}>
            코드
          </li>
          <li id="content" style={{ width: '30%' }}>
            제출시각
          </li>
        </ul>
        {scores.map((score, i) => (
          <ul id="content-list" key={i}>
            <li id="content" style={{ width: '10%' }}>
              {score.submit_id}
            </li>
            <li id="content" style={{ width: '15%' }}>
              {score.id}
            </li>
            <li id="content" style={{ width: '15%' }}>
              <IconResult result={score.result} />
            </li>
            <li id="content" style={{ width: '20%' }}>
              {score.score === '100' ? (
                <>
                  <span style={{ color: 'green' }}>{score.score}</span> / 100
                </>
              ) : (
                <>
                  <span style={{ color: 'red' }}>{score.score}</span> / 100
                </>
              )}
            </li>
            <li id="content" style={{ width: '10%' }}>
              <button id="problem" onClick={handleCodeCheck}>
                Code
              </button>
            </li>
            <li id="content" style={{ width: '30%' }}>
              {score.submit_time}
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
