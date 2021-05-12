import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Hidden, Paper, SwipeableDrawer } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import CloseIcon from '@material-ui/icons/Close'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'

const ModalComponent = ({ user }) => {
  const history = useHistory()
  const [toggleMenu, setToggleMenu] = useState(false)

  const classId = 1
  const weekId = 1

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleWeekInfo = () => {
    history.push(`/${classId}/${weekId}/contents`)
    handleToggleMenu()
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
        <Container onClick={handleToggleMenu} elevation={10}>
          <KeyboardArrowRightIcon />
        </Container>
        <StyledDrawer id="Drawer" open={toggleMenu} onOpen={handleToggleMenu} onClose={handleToggleMenu} swipeAreaWidth={1}>
          <div className="close-btn">
            <CloseModalBtn onClick={handleToggleMenu} />
          </div>

          {/* MY INFO */}
          <Subtitle>My Info</Subtitle>
          <UserInfo>
            <ChevronRightIcon style={{ width: '18px', height: '18px' }} />
            <p>{user.id}</p>
          </UserInfo>

          <UserInfo>
            {/* Dummy user name */}
            <ChevronRightIcon style={{ width: '18px', height: '18px' }} />
            <p>김지환</p>
          </UserInfo>

          {/* MY CLASS */}
          <Subtitle>My Class</Subtitle>
          <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
            {userClassInfo.map((class_, i) => (
              <StyledTreeItem nodeId={`${parseInt(i)}`} label={class_.className} key={i}>
                {class_.weekInfo.map((week_, j) => (
                  // TODO onClick event
                  <StyledTreeItem label={week_} key={j} onClick={handleWeekInfo} />
                ))}
              </StyledTreeItem>
            ))}
          </TreeView>
        </StyledDrawer>
      </Hidden>
    </>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}

export default connect(mapStateToProps)(ModalComponent)

const Container = styled(Paper)`
  && {
    position: fixed;
    width: 15px;
    height: 100vh;
    background: ${(props) => props.theme.POINT};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 12px 12px 0;
    opacity: 0.7;
    transition: 0.3s;
    svg {
      width: 15px;
    }
    path {
      color: white;
    }
    &:hover {
      svg {
        width: 25px;
      }
      path {
        color: white;
      }
      width: 25px;
      opacity: 1;
      cursor: pointer;
    }
  }
`

const CloseModalBtn = styled(CloseIcon)`
  && {
    width: 20px;
    height: 20px;
    margin: 10px 10px 0 0;
    color: ${(props) => props.theme.MAIN_BORDER};
  }
  &:hover {
    cursor: pointer;
    path {
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

const Subtitle = styled.div`
  margin: 5px 10px;
  padding: 5px 0;
  font-size: 1.4em;
  font-weight: 600;
  color: ${(props) => props.theme.POINT};
  border-bottom: 2px solid ${(props) => props.theme.POINT};
`

const UserInfo = styled.div`
  font-size: 1em;
  font-weight: 500;
  margin: 2px 10px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.GENERAL_FONT};
  cursor: default;
  p {
    padding: 10px;
    width: 100%;
    &:hover {
      border-left: 5px solid ${(props) => props.theme.POINT};
      background: ${(props) => props.theme.BOARD_LIST_HOVER};
    }
  }
`
const StyledTreeItem = styled(TreeItem)`
  && {
    box-sizing: border-box;
    margin: 0 10px;
  }
  && .MuiTreeItem-content {
    path {
      color: ${(props) => props.theme.GENERAL_FONT};
    }
  }
  && .MuiTypography-root {
    margin: 2px 0;
    padding: 5px;
    font-weight: 500;
    color: ${(props) => props.theme.GENERAL_FONT};
    &:hover {
      border-left: 5px solid ${(props) => props.theme.POINT};
      background: ${(props) => props.theme.BOARD_LIST_HOVER};
    }
  }
`
