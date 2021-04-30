import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {} from '../../redux'

const Menu = () => {
  const routes = [
    { path: '/', name: 'class1' },
    { path: '/', name: 'class2' },
    { path: '/', name: 'class3' },
    { path: '/', name: 'class4' },
  ]

  return (
    <MenuWrapper>
      {routes.map((route) => (
        <StyledLink to={route.path} key={route.name}>
          <Li>{route.name}</Li>
        </StyledLink>
      ))}
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
