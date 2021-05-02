import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'

import {} from '../../redux'

const Menu = ({ handleToggleMenu }) => {
  const history = useHistory()

  const handleWeekInfo = () => {
    history.push('/problems')
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
    <MenuWrapper>
      <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
        {userClassInfo.map((class_, i) => (
          <StyledTreeItem nodeId={i} label={class_.className}>
            {class_.weekInfo.map((week_) => (
              // TODO onClick event
              <StyledTreeItem label={week_} onClick={handleWeekInfo} />
            ))}
          </StyledTreeItem>
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

const StyledTreeItem = styled(TreeItem)`
  && .MuiTreeItem-content {
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
