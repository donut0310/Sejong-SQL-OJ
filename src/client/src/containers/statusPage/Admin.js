import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { useLocation } from 'react-router'

import Title from '../../components/title/Title'
import UserTable from '../../components/pages/statusPage/UserTable'
import PaginationTab from '../../components/pagination/PaginationTab'
import queryString from 'query-string'
import AdminTable from '../../components/pages/statusPage/AdminTable'

const Admin = ({ match }) => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const pId = query.pId
  const [userId, setUserId] = useState(query.userId)

  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
    problemName: '',
    startTime: '',
    endTime: '',
  })

  const [isChanged, setIsChanged] = useState(false)

  const [statusList, setStatusList] = useState([])

  const [result, setResult] = useState(0)
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  // Status
  useEffect(() => {
    ;(async () => {
      if (userId === '') {
        const { data } = await axios.get(`/api/v1/user/status/option?pId=${pId}&result=${result}&page=${page}`)
        console.log('Get status', data)
        setStatusList(data.result)
        setMaxPage(data.maxpage)
      } else {
        const { data } = await axios.get(`/api/v1/user/status/option?userId=${userId}&pId=${pId}&result=${result}&page=${page}`)
        console.log('Get status', data)
        setStatusList(data.result)
        setMaxPage(data.maxpage)
      }
    })()
  }, [isChanged])

  // Title
  useEffect(() => {
    const fetchTitleData = async () => {
      const { data } = await axios.get(`/api/v1/problem/${pId}`)
      console.log('Get titleData', data)
      const problem = data.result[0]

      setProblemInfo({ className: problem.class_name, weekName: problem.week_title, problemName: problem.title, startTime: problem.start_time, endTime: problem.end_time })
    }

    fetchTitleData()
  }, [pId])

  const handleInputID = (e) => {
    setUserId(e.target.value)
  }

  const handleResultChange = (e) => {
    setResult(e.target.value)
  }

  const handleSearch = () => {
    console.log('Search ID:', userId, 'result:', result, 'page:', page)
    setIsChanged(!isChanged)
    setPage(1)
  }

  return (
    <Container>
      <Title problemInfo={problemInfo} />
      <div id="search-form" style={{ marginBottom: '20px' }}>
        <span>
          아이디:<input className="input-form" type="text" placeholder="아이디" value={userId} onChange={handleInputID}></input>
        </span>
        <span>
          결과:
          <select id="select-form" name="결과" onChange={handleResultChange}>
            <option value={0}>결과</option>
            <option value={0} defaultValue>
              All
            </option>
            <option value={1}>Accept</option>
            <option value={2}>Wrong Answer</option>
            <option value={3}>Error</option>
            {/* <option value="">Loading</option> */}
          </select>
        </span>
        <button id="submit-btn" onClick={handleSearch}>
          조회
        </button>
      </div>
      <AdminTable statusList={statusList} />
      <PaginationTab currentPage={page} setPage={setPage} maxPage={maxPage} />
    </Container>
  )
}

export default Admin
const Container = styled.div`
  text-align: center;
  color: ${(props) => props.theme.GENERAL_FONT};
`
