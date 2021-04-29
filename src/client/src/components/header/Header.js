import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Collapse, Container } from '@material-ui/core'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'

import Logo from './Logo'
import Link from './Link'
import Menu from './Menu'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true)

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      <HeaderWrapper>
        <MaxWidth maxWidth="lg">
          <Logo />
          <MenuWrapper>
            <Link />
            <ToggleMenuBtn onClick={handleToggleMenu} />
          </MenuWrapper>
        </MaxWidth>
      </HeaderWrapper>

      <StyledCollapse in={toggleMenu}>
        <MaxWidth maxWidth="lg">
          <Menu />
        </MaxWidth>
      </StyledCollapse>
    </>
  )
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(Header)

const HeaderWrapper = styled.div`
  /* position: sticky; */

  border-top: 2px solid ${(props) => props.theme.POINT};
  border-bottom: 1.5px solid ${(props) => props.theme.SUB_BORDER};

  color: ${(props) => props.theme.GENERAL_FONT};
`

const MenuWrapper = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
`

const MaxWidth = styled(Container)`
  display: flex;
  position: sticky;
`

const ToggleMenuBtn = styled(MenuRoundedIcon)`
  && {
    width: 30px;
    height: 30px;
  }

  display: flex;
  position: absolute;
  top: 50px;
  right: 5px;

  &:hover {
    cursor: pointer;
    path {
      color: ${(props) => props.theme.POINT};
    }
  }
`

const StyledCollapse = styled(Collapse)`
  width: 100%;
  border-bottom: 1.5px solid ${(props) => props.theme.SUB_BORDER};
`