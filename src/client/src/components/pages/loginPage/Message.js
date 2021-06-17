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
    height: 30%;
    padding: 10px;
  }
`
const StyledIcon = styled(ErrorOutlineIcon)`
  && {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    color: ${(props) => props.theme.POINT};
  }
`

const Text = styled.div`
  margin-top: 20px;
  font-weight: 500;
  &:focus {
    outline: 0;
  }
`
