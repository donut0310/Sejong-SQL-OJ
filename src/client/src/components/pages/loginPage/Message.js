import React from 'react'
import Modal from '@material-ui/core/Modal'
import { Paper } from '@material-ui/core'
import styled from 'styled-components'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

const Message = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(!isOpen)
  }
  return (
    <StyledModal open={isOpen} onClose={handleClose}>
      <StyledPaper elevation={5}>
        <StyledIcon />
        <Text>아이디 또는 비밀번호가 잘못되었습니다.</Text>
      </StyledPaper>
    </StyledModal>
  )
}

export default Message

const StyledModal = styled(Modal)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const StyledPaper = styled(Paper)`
  && {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    min-width: 300px;
    height: 30%;
    padding: 30px;
    background: ${(props) => props.theme.HEADER_BACKGROUND};
    &:focus {
      outline: 0;
    }
  }
`
const StyledIcon = styled(ErrorOutlineIcon)`
  && {
    max-width: 100px;
    max-height: 100px;
    width: 15rem;
    height: 15rem;
    margin-bottom: 10px;
    color: ${(props) => props.theme.POINT};
  }
`

const Text = styled.div`
  margin-top: 20px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.GENERAL_FONT};
  &:focus {
    outline: 0;
  }
`
