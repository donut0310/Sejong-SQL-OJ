import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Switch } from '@material-ui/core'

import { toggleTheme, logOut } from '../../redux'

const NavLink = ({ toggleTheme, user, logOut }) => {
  const history = useHistory()

  const handleLogOutBtn = async () => {
    const result = await logOut()
    history.push('/login')
  }

  return (
    <LinkWrapper>
      <Name>{user.id}</Name>
      <LinkBtn onClick={handleLogOutBtn}>
        <Li onClick={handleLogOutBtn}>Logout</Li>
      </LinkBtn>
      <ThemeSwitch onClick={toggleTheme} size="small" color="default" />
    </LinkWrapper>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}

const mapDispatchToProps = {
  toggleTheme,
  logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLink)

const LinkWrapper = styled.ul`
  font-size: 0.9rem;
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 8px;
  right: 0;
`

const ThemeSwitch = styled(Switch)`
  margin-top: 7px;

  .MuiSwitch-thumb {
    color: ${(props) => props.theme.POINT};
  }
`

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-radius: 4px;
    color: ${(props) => props.theme.POINT};
  }
`

const StyledLink = styled(Link)`
  width: 60px;
  text-decoration: none;
`

const LinkBtn = styled.div`
  width: 60px;
  cursor: pointer;
`

const Name = styled.p`
  color: ${(props) => props.theme.POINT};
  font-size: 1rem;
  font-weight: bold;
`
