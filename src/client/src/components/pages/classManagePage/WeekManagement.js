import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

import { TextField } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const WeekManagement = () => {
  const history = useHistory()
  const { classId } = useParams()

  const [isChanged, setIsChanged] = useState(false)
  const [newWeekName, setNewWeekName] = useState('')

  const [classInfo, setClassInfo] = useState([
    {
      weekName: '1주차 실습 SELECT 문 연습',
      weekId: 1,
      pList: [
        { pId: 1, pName: '이름이 없는 동물의 아이디' },
        { pId: 2, pName: '모든 동물 조회하기' },
        { pId: 3, pName: '루시와 엘라 찾기' },
      ],
    },
    {
      weekName: '2주차 실습 table 다루기',
      weekId: 4,
      pList: [
        { pId: 4, pName: '역순 정렬하기' },
        { pId: 5, pName: '없어진 기록 찾기' },
        { pId: 6, pName: '야식으로 치킨, 햄버거 중에 뭐가 좋을지' },
      ],
    },
    {
      weekName: '3주차 실습',
      weekId: 7,
      pList: [
        { pId: 8, pName: '입양 시각 구하기(1)' },
        { pId: 12, pName: '중성화 여부 파악하기' },
      ],
    },
  ])

  const handleChangeNewWeekName = (e) => {
    setNewWeekName(e.target.value)
    console.log(newWeekName)
  }

  const handleAddWeekBtn = async () => {
    console.log('handleAddWeekBtn 실행')

    const { data } = await axios.post(`/api/v1/course/week/${classId}`)
    setIsChanged(!isChanged)
  }

  const handleDeleteWeekBtn = async (weekId) => {
    console.log('handleDeleteWeekBtn 실행', weekId)

    const { data } = await axios.delete(`/api/v1/course/week/${weekId}`)
    setIsChanged(!isChanged)
  }

  const handleAddProblemBtn = async (weekId) => {
    console.log('handleAddProblemBtn 실행', weekId)

    history.push(`/manage/${classId}/${weekId}/addproblem`)
  }

  const handleDeleteProblemBtn = async (pId) => {
    console.log('handleDeleteProblemBtn 실행', pId)

    const { data } = await axios.delete(`/api/v1/course/problem/${pId}`)
    setIsChanged(!isChanged)
  }

  const handleProblemName = async (weekId, pId) => {
    console.log('handleProblemName 실행', pId)

    history.push(`/${classId}/${weekId}/problem/${pId}`)
  }

  useEffect(() => {
    console.log('WeekManagement useEffect')

    const fetchWeekList = async () => {
      const { data } = await axios.get(`/api/v1/course/problem/${classId}`)
      console.log(data)
      // TODO
      setClassInfo(data.zzzzzzzzzzzzz)
    }

    // fetchWeekList()
  }, [, isChanged])

  return (
    <Wrapper>
      <SubTitle>주차 추가</SubTitle>
      <AddWeekWrapper>
        <AddWeekForm noValidate autoComplete="off">
          <StyledTextField id="outlined-basic" label="주차 이름" variant="outlined" onChange={handleChangeNewWeekName} />
          <AddWeekBtn onClick={handleAddWeekBtn}>추가</AddWeekBtn>
        </AddWeekForm>
      </AddWeekWrapper>

      <SubTitle>주차 목록</SubTitle>
      <WeekListWrapper>
        {classInfo.map((week, i) => (
          <WeekWrapper key={i}>
            <WeepNameWrapper>
              <WeekNameText>{week.weekName}</WeekNameText>
              <BtnBox>
                <WeekAddBtn
                  onClick={() => {
                    handleAddProblemBtn(week.weekId)
                  }}
                />
                <WeekDeleteBtn
                  onClick={() => {
                    handleDeleteWeekBtn(week.weekId)
                  }}
                />
              </BtnBox>
            </WeepNameWrapper>
            {week.pList.map((problem, j) => (
              <ProblemWrapper key={j}>
                <ProblemNameText
                  onClick={() => {
                    handleProblemName(week.weekId, problem.pId)
                  }}
                >
                  {problem.pName}
                </ProblemNameText>
                <BtnBox>
                  <ProblemDeleteBtn
                    onClick={() => {
                      handleDeleteProblemBtn(problem.pId)
                    }}
                  />
                </BtnBox>
              </ProblemWrapper>
            ))}
          </WeekWrapper>
        ))}
      </WeekListWrapper>
    </Wrapper>
  )
}

export default WeekManagement

const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.SUB_BORDER};
  background: ${(props) => props.theme.INPUT_BACKGROUND};
  border-radius: 5px;

  padding: 10px 10px 20px 10px;
  margin-bottom: 30px;
`

const WeekListWrapper = styled.div`
  background: ${(props) => props.theme.HEADER_BACKGROUND};

  border: 1px solid ${(props) => props.theme.SUB_BORDER};
  border-radius: 5px;

  padding: 10px;
`

const AddWeekWrapper = styled.div`
  padding: 5px;

  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

const AddWeekForm = styled.form`
  display: flex;
`

const SubTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;

  margin-bottom: 20px;
`

const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    background: ${(props) => props.theme.HEADER_BACKGROUND};
    margin-right: 5px;
    border-radius: 5px;
  }

  .MuiInputBase-input {
    color: ${(props) => props.theme.GENERAL_FONT};
  }
  .MuiInputLabel-formControl {
    color: ${(props) => props.theme.MAIN_BORDER};
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${(props) => props.theme.POINT};
    font-weight: bold;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.POINT};
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border: 1.5px solid ${(props) => props.theme.SUB_BORDER};
  }
`

const AddWeekBtn = styled.div`
  font-size: 1.1rem;

  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  border-radius: 5px;

  color: white;
  background: ${(props) => props.theme.POINT};
`

const WeekWrapper = styled.div`
  padding: 3px;
  margin-top: 8px;
  margin-bottom: 12px;
`

const WeekNameText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

const WeepNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2.5px solid ${(props) => props.theme.POINT};
  margin-bottom: 5px;
`

const ProblemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3px;
  border-left: 4px solid ${(props) => props.theme.HEADER_BACKGROUND};

  :hover {
    border-left: 4px solid ${(props) => props.theme.POINT};
    background: ${(props) => props.theme.BOARD_LIST_HOVER};
  }
`

const ProblemNameText = styled.div`
  font-size: 1.1rem;
  display: flex;
  margin-left: 20px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
`

const WeekDeleteBtn = styled(RemoveIcon)`
  padding: 4px;

  && {
    font-size: 1.8rem;
  }

  &:hover {
    cursor: pointer;
    path {
      color: ${(props) => props.theme.POINT};
    }
  }
`

const WeekAddBtn = styled(AddIcon)`
  padding: 4px;

  && {
    font-size: 1.8rem;
  }

  &:hover {
    cursor: pointer;
    path {
      color: ${(props) => props.theme.POINT};
    }
  }
`

const ProblemDeleteBtn = styled(DeleteIcon)`
  padding: 4px;

  && {
    font-size: 1.5rem;
  }

  &:hover {
    cursor: pointer;
    path {
      color: ${(props) => props.theme.POINT};
    }
  }
`
