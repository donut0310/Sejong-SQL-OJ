import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Hidden } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import CloseIcon from '@material-ui/icons/Close'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'

import { SwipeableDrawer } from '@material-ui/core'

const ModalComponent = () => {
  const history = useHistory()

  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleWeekInfo = () => {
    history.push('/problems')
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
        <Container id="Drawer">
          <div className="open-btn" onClick={handleToggleMenu}>
            <OpenModalBtn />
          </div>
          <StyledDrawer open={toggleMenu} onOpen={handleToggleMenu} onClose={handleToggleMenu}>
            <div className="close-btn">
              <CloseModalBtn onClick={handleToggleMenu} />
            </div>
            <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
              {userClassInfo.map((class_, i) => (
                <StyledTreeItem nodeId={i} label={class_.className} key={i}>
                  {class_.weekInfo.map((week_, j) => (
                    // TODO onClick event
                    <StyledTreeItem label={week_} key={j} onClick={handleWeekInfo} />
                  ))}
                </StyledTreeItem>
              ))}
            </TreeView>
          </StyledDrawer>
        </Container>
      </Hidden>
    </>
  )
}

export default ModalComponent

const OpenModalBtn = styled(KeyboardArrowRightIcon)`
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
  && {
    width: 20px;
    height: 20px;
  }
  &:hover {
    cursor: pointer;
    path {
      color: ${(props) => props.theme.POINT};
    }
  }
`

const Container = styled.div`
  position: fixed;
  .PrivateSwipeArea-root-5 {
    z-index: 0;
  }
  .PrivateSwipeArea-root-10 {
    z-index: 0;
  }
  .PrivateSwipeArea-root-15 {
    z-index: 0;
  }
  .PrivateSwipeArea-root-20 {
    z-index: 0;
  }
  div.open-btn {
    position: absolute;
    z-index: 1;
    height: 100vh;
    width: 15px;
    display: flex;
    justify-content: center;
    background: ${(props) => props.theme.POINT};
    color: white;
    &:hover {
      width: 30px;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.3);
      color: ${(props) => props.theme.POINT};
    }
  }
`

const StyledDrawer = styled(SwipeableDrawer)`
  && .MuiPaper-root {
    background: ${(props) => props.theme.BACKGROUND};
    min-width: 350px;
  }
  && div.close-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: ${(props) => props.theme.GENERAL_FONT};
  }
`

const StyledTreeItem = styled(TreeItem)`
  && .MuiTreeItem-root {
    box-sizing: border-box;
  }
  && .MuiTreeItem-content {
    margin-left: 10px;
    path {
      color: ${(props) => props.theme.GENERAL_FONT};
    }
  }
  && .MuiTypography-root {
    margin: 5px;
    color: ${(props) => props.theme.GENERAL_FONT};
    &:hover {
      background: ${(props) => props.theme.SUB_BORDER};
    }
  }
`
