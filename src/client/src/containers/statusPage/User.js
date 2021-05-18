import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { useLocation } from 'react-router'
import Title from '../../components/title/Title'
import UserTable from '../../components/pages/statusPage/UserTable'
import PaginationTab from '../../components/pagination/PaginationTab'
import queryString from 'query-string'

const User = ({ user, match }) => {
  const history = useHistory()
  const { classId, weekId } = useParams()

  // WIP
  const location = useLocation()
  console.log('location', location)
  console.log('location.search', location.search)
  const query = queryString.parse(location.search)
  console.log('query', query)

  const pId = query.pId

  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
    problemName: '',
    startTime: '',
    endTime: '',
  })

  const [statusList, setStatusList] = useState([])

  const dummyResultList = [
    { submit_id: '5', user_id: '16010000', result: 'wa', score: '50', submit_time: '2000-01-01 00:00:00' },
    { submit_id: '4', user_id: '16010000', result: 'loading', score: '100', submit_time: '2000-01-01 00:00:00' },
    { submit_id: '3', user_id: '17010000', result: 'accept', score: '100', submit_time: '2000-01-01 00:00:00' },
    { submit_id: '2', user_id: '18010000', result: 'wa', score: '30', submit_time: '2000-01-01 00:00:00' },
    { submit_id: '1', user_id: '19010000', result: 'error', score: '100', submit_time: '2000-01-01 00:00:00' },
  ]

  const result = 'all'
  const [page, setPage] = useState(1)
  console.log('이동 페이지 ', page)
  const maxPage = 5

  useEffect(() => {
    ;(async () => {
      // const { data } = await axios.get(`/api/v1/user/status?userId=${user.id}&pId=${pId}&result=${result}&page=${page}`)
      // setStatusList(data.result)
      setStatusList(dummyResultList)

      // const { titleData } = await axios.get(`/api/v1/week/${weekId}`)
      // const currentInfo = titleData.result[0]
      // setProblemInfo({ className: currentInfo.class_name, weekName: currentInfo.data.week_name })
    })()
  }, [])

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

const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}

export default connect(mapStateToProps)(User)

const Container = styled.div`
  text-align: center;
  color: ${(props) => props.theme.GENERAL_FONT};
`
