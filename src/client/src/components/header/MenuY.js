import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'
import SettingsIcon from '@material-ui/icons/Settings'
import {} from '../../redux'

const Menu = ({ handleToggleMenu }) => {
  const history = useHistory()

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
    <MenuWrapper>
      <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
        {dummyUserClassList.map((class_) => (
          <TreeContainer key={class_.classId}>
            <StyledTreeItem nodeId={`${class_.className}`} label={class_.className}>
              {class_.weekList.map((week_) => (
                <StyledTreeItem label={week_.weekName} key={week_.weekId} onClick={handleWeekInfo(class_.classId, week_.weekId)} />
              ))}
            </StyledTreeItem>
            <SettingBtn onClick={handleManageClass(class_.classId)} />
          </TreeContainer>
        ))}
      </TreeView>
    </MenuWrapper>
  )
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

const MenuWrapper = styled.ul`
  width: 100%;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 10px;

  &:first-child {
    padding-top: 10px;
  }
`

const SettingBtn = styled(SettingsIcon)`
  && {
    font-size: 1.3em;
    margin-top: 7px;
    margin-left: 7px;
    color: ${(props) => props.theme.GENERAL_FONT};
    &:hover {
      color: ${(props) => props.theme.POINT};
      cursor: pointer;
    }
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
