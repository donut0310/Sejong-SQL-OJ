import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Fab } from '@material-ui/core'
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded'

const ScrollUp = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  const [scrollTop, setScrollTop] = useState(window.scrollY)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    setScrollTop(scrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <StyledWrapper>
      {Number(scrollTop) > 150 ? (
        <StyledFab size="small" onClick={handleScrollUp}>
          <ArrowUpwardRoundedIcon />
        </StyledFab>
      ) : null}
    </StyledWrapper>
  )
}

export default ScrollUp

const StyledWrapper = styled.div`
  width: 100%;
`

const StyledFab = styled(Fab)`
  && {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1;
  }
`
