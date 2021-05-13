import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
  const [userClassList, setUserClassList] = useState([{}])
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    console.log('USE EFFECT 실행 - MODAL')
    // ;(async () => {
    //   await axios
    //     .get(`/api/v1/user/${user.id}`)
    //     .then((res) => setUserClassList(res.data))
    //     .catch((err) => console.log(err))
    // })()
  }, [])

  const dummyUserClassList = [
    {
      classId: 15,
      className: '데이터베이스1 - 김지환',
      weekList: [
        { weekId: 3, weekName: '1주차 실습' },
        { weekId: 5, weekName: '2주차 실습(분석)' },
      ],
    },
    {
      classId: 19,
      className: '심화 데이터베이스3 (김지환)',
      weekList: [
        { weekId: 1, weekName: '1주차 실습' },
        { weekId: 16, weekName: '2주차 실습' },
      ],
    },
  ]

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleWeekInfo = (classID, weekID) => () => {
    history.push(`/${classID}/${weekID}/contents`)
    handleToggleMenu()
  }

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
            {dummyUserClassList.map((class_) => (
              <StyledTreeItem nodeId={`${class_.className}`} key={class_.classId} label={class_.className}>
                {class_.weekList.map((week_) => (
                  <StyledTreeItem label={week_.weekName} key={week_.weekId} onClick={handleWeekInfo(class_.classId, week_.weekId)} />
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
