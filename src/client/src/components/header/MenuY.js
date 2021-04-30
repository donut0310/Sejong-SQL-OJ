import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'

import {} from '../../redux'

const Menu = () => {
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
          <TreeItem nodeId={i} label={class_.className}>
            {class_.weekInfo.map((week_) => (
              // TODO onClick event
              <TreeItem label={week_} />
            ))}
          </TreeItem>
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
  align-items: center;

  padding: 0 5px;
  padding-bottom: 10px;

  &:first-child {
    padding-top: 10px;
  }
`

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;

  &:hover {
    * {
      color: ${(props) => props.theme.POINT};
    }
  }

  color: ${(props) => props.theme.GENERAL_FONT};
`

const Li = styled.li`
  font-size: 1.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 2px 10px;
  padding: 8px 12px;

  border: 2px solid transparent;
  &:hover {
    border: 2px solid ${(props) => props.theme.POINT};
    color: ${(props) => props.theme.POINT};
  }
`

const ModalWrapper = styled.div`
  display: flex;
  align-content: center;
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
