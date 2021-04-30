import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Modal, Hidden, Fade } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const ModalComponenet = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      <Hidden xsDown>
        <ModalWrapper>
          <ModalContents open={toggleMenu}>
            <ContentsWrapper>
              <CloseModalBtn onClick={handleToggleMenu} />
              트리뷰
            </ContentsWrapper>
          </ModalContents>
          <OpenModalBtn onClick={handleToggleMenu} />
        </ModalWrapper>
      </Hidden>
    </>
  )
}

export default ModalComponenet

const ModalWrapper = styled.div`
  display: flex;
  align-content: center;
`

const ModalContents = styled(Modal)`
  display: flex;
  height: 100%;
`

const ContentsWrapper = styled.div`
  min-width: 350px;

  background: ${(props) => props.theme.BACKGROUND};

  display: flex;

  border-radius: 0 5px 5px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  padding: 8px;

  &:focus {
    outline: 0;
  }
`

const OpenModalBtn = styled(CloseIcon)`
  position: absolute;
  top: 50%;
  margin-top: -4px;

  padding: 4px;
  &:hover {
    cursor: pointer;
    path {
      color: ${(props) => props.theme.POINT};
    }
  }
`

const CloseModalBtn = styled(CloseIcon)`
  /* margin-left: 0; */

  padding: 4px;
  &:hover {
    cursor: pointer;
    path {
      color: ${(props) => props.theme.POINT};
    }
  }
`
