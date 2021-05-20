import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import Title from '../../components/title/Title'
import InputCode from '../../components/pages/codeCheckPage/InputCode'

const Public = () => {
  const history = useHistory()
  const { classId, weekId, submitId } = useParams()

  const [problemInfo, setProblemInfo] = useState({
    className: '',
    weekName: '',
    problemName: '',
    startTime: '',
    endTime: '',
  })

  const [pId, setPId] = useState(0)
  const [code, setCode] = useState('')

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get(`/api/v1/user/code/${submitId}`)
      console.log('submitted data', data.result[0])
      await setPId(data.result[0].p_id)
      setCode(data.result[0].user_query)

      const titleData = await axios.get(`/api/v1/problem/${data.result[0].p_id}`)
      const problem = titleData.data.result[0]
      console.log('titledata', problem)

      setProblemInfo({ className: problem.class_name, weekName: problem.week_title, problemName: problem.title })
    })()
  }, [])

  return (
    <div>
      <Title problemInfo={problemInfo} />
      <InputCode pId={pId} code={code} />
    </div>
  )
}

export default Public
