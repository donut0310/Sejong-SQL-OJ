import React from 'react'
import styled from 'styled-components'
import Pagination from '@material-ui/lab/Pagination'

const PaginationTab = ({ setPage, maxPage }) => {
  const handlePageClick = (e, page) => {
    setPage(page)
  }
  return (
    <Wrapper>
      <StyledPagination count={maxPage} shape="rounded" showFirstButton showLastButton onChange={handlePageClick} />
    </Wrapper>
  )
}

export default PaginationTab

const Wrapper = styled.div`
  margin: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledPagination = styled(Pagination)`
  ul,
  li,
  button {
    color: ${(props) => props.theme.GENERAL_FONT};
    .Mui-selected {
      background: ${(props) => props.theme.BOARD_LIST_HOVER};
    }
  }
`
