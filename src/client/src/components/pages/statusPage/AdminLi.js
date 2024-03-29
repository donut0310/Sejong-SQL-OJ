import React, { useState } from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import queryString from 'query-string'
import acceptIcon from '../../../assets/resultIcons/accept_icon.png'
import errorIcon from '../../../assets/resultIcons/error_icon.png'
import loadingIcon from '../../../assets/resultIcons/loading_icon.png'
import wrongAnswerIcon from '../../../assets/resultIcons/wronganswer_icon.png'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { TextField, Collapse, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import axios from 'axios'
import moment from 'moment'

const AdminLi = ({ status, isChanged, setIsChanged }) => {
  const history = useHistory()
  const { classId, weekId } = useParams()
  const location = useLocation()
  const query = queryString.parse(location.search)
  const userId = query.userId

  const [isOpen, setIsOpen] = useState(false)

  const [result, setResult] = useState(status.result)
  const handleChangeResult = (e) => {
    setResult(e.target.value)
  }

  const [editScore, setEditScore] = useState(status.score)

  const handleChangeEditScore = (e) => {
    setEditScore(e.target.value)
  }

  const handleEditBtn = async () => {
    const { data } = await axios.post(`/api/v1/user/status/edit/${status.submit_id}`, {
      result: result,
      score: editScore,
    })

    setIsOpen(false)
    setIsChanged(!isChanged)
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
    const dateTime = new Date(data).toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
    return moment(dateTime).format('YYYY-MM-DD HH:mm:ss')
  }

  const handleCodeCheck = (submitId) => () => {
    history.push(`/${classId}/${weekId}/code/${submitId}`)
  }

  const handleQNAClick = (submitId) => async () => {
    const data = await axios.post(`/api/v1/user/qna/${submitId}`)
    setIsChanged(!isChanged)
  }

  return (
    <Wrapper isOpen={isOpen}>
      <ul id="content-list">
        <li id="content" style={{ width: '7%' }}>
          {status.submit_id}
        </li>
        <li id="content" style={{ width: '23%' }}>
          {status.user_id}
        </li>
        <li id="content" style={{ width: '10%' }}>
          <IconResult result={status.result} />
        </li>
        <li id="content" style={{ width: '10%' }}>
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
        <li id="content" style={{ width: '23%' }}>
          {parseDateTime(status.submit_time)}
        </li>
        <li id="qna" style={{ width: '8%' }}>
          {status.is_objection ? <QnaIcon onClick={handleQNAClick(status.submit_id)} /> : <></>}
        </li>
        <li id="content" style={{ width: '9%' }}>
          {isOpen ? (
            <CloseEditBtn
              onClick={() => {
                setIsOpen(false)
              }}
            />
          ) : (
            <OpenEditBtn
              onClick={() => {
                setIsOpen(true)
              }}
            />
          )}
        </li>
      </ul>
      <Collapse in={isOpen}>
        <ul id="content-list">
          <li id="content" style={{ width: '7%' }}></li>
          <li id="content" style={{ width: '23%' }}></li>
          <li id="content" style={{ width: '10%' }}>
            <StyledFormControl variant="outlined" size="small">
              <StyledSelect value={result} onChange={handleChangeResult}>
                <StyledMenuItem value={'Accept'}>AC</StyledMenuItem>
                <StyledMenuItem value={'WA'}>WA</StyledMenuItem>
                <StyledMenuItem value={'Error'}>ER</StyledMenuItem>
              </StyledSelect>
            </StyledFormControl>
          </li>
          <li id="content" style={{ width: '10%' }}></li>
          <li id="content" style={{ width: '10%' }}></li>
          <li id="content" style={{ width: '23%' }}>
            <StyledTextField value={editScore} size="small" variant="outlined" type="text" onChange={handleChangeEditScore} />
          </li>
          <li id="qna" style={{ width: '8%' }}></li>
          <li id="content" style={{ width: '9%' }}>
            <EditBtn onClick={handleEditBtn} />
            {/* <button id="submit-btn" onClick={handleEditBtn}>
              수정
            </button> */}
          </li>
        </ul>
      </Collapse>
    </Wrapper>
  )
}

export default AdminLi

const Wrapper = styled.div`
  border-left: 5px solid ${(props) => props.theme.CONTENTS};

  ${({ isOpen }) =>
    isOpen &&
    `
    border-left: 5px solid #B41313;
  `}
`

const StyledFormControl = styled(FormControl)`
  && {
    background: ${(props) => props.theme.HEADER_BACKGROUND};
    margin-left: 7px;
  }

  .MuiInputBase-input {
    color: ${(props) => props.theme.GENERAL_FONT};
  }
  .MuiInputLabel-formControl {
    color: ${(props) => props.theme.MAIN_BORDER};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.POINT};
    font-weight: bold;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.POINT};
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: 1.5px solid ${(props) => props.theme.SUB_BORDER};
  }
`

const StyledSelect = styled(Select)``

const StyledMenuItem = styled(MenuItem)``

const StyledTextField = styled(TextField)`
  && {
    width: 80%;
    background: ${(props) => props.theme.HEADER_BACKGROUND};
    border-radius: 5px;
  }

  .MuiInputBase-input {
    color: ${(props) => props.theme.GENERAL_FONT};
  }
  .MuiInputLabel-formControl {
    color: ${(props) => props.theme.MAIN_BORDER};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.POINT};
    font-weight: bold;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.POINT};
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: 1.5px solid ${(props) => props.theme.SUB_BORDER};
  }
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

const OpenEditBtn = styled(ExpandMoreIcon)`
  && {
    font-size: 1.8rem;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.POINT};
  }
`

const CloseEditBtn = styled(ExpandLessIcon)`
  && {
    font-size: 1.8rem;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.POINT};
  }
`

const EditBtn = styled(EditIcon)`
  && {
    font-size: 1.8rem;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.POINT};
  }
`
