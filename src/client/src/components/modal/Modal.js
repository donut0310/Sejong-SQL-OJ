import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Modal, Hidden, Fade } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'

const ModalComponenet = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const userClassInfo = [
    {
      className: '데이터베이스1(김지환)',
      weekInfo: ['1주차 실습(C언어복습)', '2주차 실습(분석)', '3주차 실습(재귀)', '4주차 실습(배열)', '5~6주차 실습(연결리스트)'],
    },
    {
      className: '데이터베이스2(김지환)',
      weekInfo: ['7주차 실습(집합)', '9주차 실습(스택(1))', '10주차 실습(스택(2))', '11주차 실습(큐)', '12주차 실습(트리(1))', '13주차 실습(트리(2))', '14주차 실습(트리(3))'],
    },
    {
      className: '(2020-1학기)자료구조및실습001(이수정)',
      weekInfo: ['1주차 실습(C언어복습)', '2주차 실습(분석)', '3주차 실습(재귀)', '12주차 실습(트리(1))', '13주차 실습(트리(2))', '14주차 실습(트리(3))'],
    },
    {
      className: '(2019-2학기)알고리즘및실습001(국형준)',
      weekInfo: ['1주차 실습(C언어복습)', '2주차 실습(분석)', '3주차 실습(재귀)', '4주차 실습(배열)', '11주차 실습(큐)', '12주차 실습(트리(1))'],
    },
    {
      className: '고급C프로그래밍및실습002 (김지환)',
      weekInfo: ['1주차 실습(C언어복습)', '2주차 실습(분석)', '3주차 실습(재귀)', '4주차 실습(배열)', '5~6주차 실습(연결리스트)', '7주차 실습(집합)', '9주차 실습(스택(1))'],
    },
  ]

  return (
    <>
      <Hidden xsDown>
        <ModalWrapper>
          <ModalContents open={toggleMenu}>
            <ContentsWrapper>
              <CloseModalBtn onClick={handleToggleMenu} />
              <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
                {userClassInfo.map((class_, i) => (
                  <TreeItem nodeId={i} label={class_.className}>
                    {class_.weekInfo.map((week_) => (
                      // TODO onClick event
                      <TreeItem label={week_} />
                    ))}
                  </TreeItem>
                ))}
              </TreeView>
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
  flex-direction: column;

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
  padding: 4px;
  &:hover {
    cursor: pointer;
    path {
      color: ${(props) => props.theme.POINT};
    }
  }
`
