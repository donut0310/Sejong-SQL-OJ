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

  const [code, setCode] = useState('')

  //   TODO
  const [pId, setPId] = useState(0)

  const dummyCode = `
  select * from hi;`

  useEffect(() => {
    ;(async () => {
      // TODO
      // const { data } = await axios.get(`/api/v1/user/code/${submitId}`)
      // console.log("submitted data", data);
      // setPId(data.pId)
      // setCode(data.user_query)

      setCode(dummyCode)

      // TODO
      //   const { titleData } = await axios.get(`/api/v1/week/${weekId}`)
      //   console.log('Title data', titleData)

      // const currentInfo = titleData.result[0]
      // setProblemInfo({ className: currentInfo.class_name, weekName: currentInfo.data.week_name })
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
