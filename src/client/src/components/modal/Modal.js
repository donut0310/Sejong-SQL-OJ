import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Hidden, Paper, SwipeableDrawer } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import CloseIcon from '@material-ui/icons/Close'
import RemoveIcon from '@material-ui/icons/Remove'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'
import SettingsIcon from '@material-ui/icons/Settings'

const ModalComponent = ({ user }) => {
  const history = useHistory()
  const [userClassList, setUserClassList] = useState([])
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(`/api/v1/user/${user.id}`)
      console.log('Modal useEffect', data.result)
      setUserClassList(data.result)
    })()
  }, [])

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleWeekInfo = (classID, weekID) => () => {
    history.push(`/${classID}/${weekID}/contents`)
    handleToggleMenu()
  }

  const handleManageClass = (classID) => () => {
    history.push(`/manage/${classID}`)
    console.log('Go to settings (manage page) of class', classID)
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
            <p>{user.user_id}</p>
          </UserInfo>

          <UserInfo>
            <ChevronRightIcon style={{ width: '18px', height: '18px' }} />
            <p>{user.user_name}</p>
          </UserInfo>

          {/* MY CLASS */}
          <Subtitle>My Class</Subtitle>
          <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
            {userClassList &&
              userClassList.map((class_) => (
                <TreeContainer key={class_.classId}>
                  <StyledTreeItem nodeId={`${(class_.classId + 5) * 100}`} label={class_.className}>
                    {class_.weekList.map((week_) => (
                      <StyledTreeItem nodeId={`${(week_.weekId + 3) * 10}`} label={week_.weekName} key={week_.weekId} onClick={handleWeekInfo(class_.classId, week_.weekId)} />
                    ))}
                  </StyledTreeItem>
                  {(user.role === 1 || user.class_id.includes(class_.classId)) && <SettingBtn onClick={handleManageClass(class_.classId)} />}
                </TreeContainer>
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
  }
`

const TreeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledTreeItem = styled(TreeItem)`
  && {
    box-sizing: border-box;
    margin: 0 10px;
    width: 100%;
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
    border-left: 4px solid ${(props) => props.theme.BACKGROUND};
    &:hover {
      border-left: 4px solid ${(props) => props.theme.POINT};
      background: ${(props) => props.theme.MODAL_LIST_HOVER};
    }
  }
`

const StyledLi = styled.div`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  margin: 0 10px;

  font-weight: 500;
  color: ${(props) => props.theme.GENERAL_FONT};
  cursor: pointer;

  padding: 5px 5px 5px 15px;
  color: ${(props) => props.theme.GENERAL_FONT};
  border-left: 4px solid ${(props) => props.theme.BACKGROUND};

  &:hover {
    border-left: 4px solid ${(props) => props.theme.POINT};
    background: ${(props) => props.theme.MODAL_LIST_HOVER};
  }
`

const SettingBtn = styled(SettingsIcon)`
  && {
    font-size: 1.3em;
    margin-right: 15px;
    margin-top: 7px;
    color: ${(props) => props.theme.GENERAL_FONT};
    &:hover {
      color: ${(props) => props.theme.POINT};
      cursor: pointer;
    }
  }
`
