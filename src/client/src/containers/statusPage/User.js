import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import { useLocation } from 'react-router'
import Title from '../../components/title/Title'
import UserTable from '../../components/pages/statusPage/UserTable'
import PaginationTab from '../../components/pagination/PaginationTab'
import queryString from 'query-string'

const User = ({ match }) => {
  const history = useHistory()
  const { classId, weekId } = useParams()

  // WIP
  const location = useLocation()
  // console.log('location', location)
  // console.log('location.search', location.search)
  const query = queryString.parse(location.search)
  // console.log('query', query)
  const pId = parseInt(query.pId)
  const userId = parseInt(query.userId)

  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
    problemName: '',
    startTime: '',
    endTime: '',
  })

  const [statusList, setStatusList] = useState([])

  const result = 1
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(`/api/v1/user/status/option?userId=${userId}&pId=${pId}&result=${result}&page=${page}`)
      console.log('Get status', data)

      setStatusList(data.result)
      setMaxPage(data.maxpage)

      // 제목에 문제내용 없어어어어서 이거 .. 좀그런가
      // const titleData = await axios.get(`/api/v1/problem/${pId}`)
      // const problem = titleData.data.result[0]
      // // Title
      // setProblemInfo({ className: problem.class_name, weekName: problem.week_title, problemName: problem.title })
    })()
  }, [page])

  return (
    <Container>
      <Title problemInfo={problemInfo} />
      <div id="search-form" style={{ marginBottom: '20px' }}>
        <span>
          아이디:<input className="input-form" type="text" placeholder="아이디"></input>
        </span>
        <span>
          결과:
          <select id="select-form" name="결과">
            <option value="">결과</option>
          </select>
        </span>
        <button id="submit-btn">조회</button>
      </div>
      <UserTable statusList={statusList} />
      <PaginationTab setPage={setPage} maxPage={maxPage} />
    </Container>
  )
}

export default User

const Container = styled.div`
  text-align: center;
  color: ${(props) => props.theme.GENERAL_FONT};
`
