import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { TextField } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

// TODO
const classId = 1

const WeekManagement = () => {
  const [isChanged, setIsChanged] = useState(false)
  const [newWeekName, setNewWeekName] = useState('')

  const handleChangeNewWeekName = (e) => {
    setNewWeekName(e.target.value)
    console.log(newWeekName)
  }

  // TODO
  const handleAddWeekBtn = () => {
    console.log('handleAddWeekBtn 실행')

    // ! POST /api/v1/course/week/:classId

    setIsChanged(!isChanged)
  }

  // TODO
  const handleDeleteWeekBtn = async (weekId) => {
    console.log('handleDeleteWeekBtn 실행', weekId)

    // DELETE /api/v1/course/week/:weekId
    // const { data } = await axios.delete(`/api/v1/course/week/${weekId}`)

    setIsChanged(!isChanged)
  }

  // TODO
  const handleAddProblemBtn = async (weekId) => {
    console.log('handleAddProblemBtn 실행', weekId)

    // ! push =>

    setIsChanged(!isChanged)
  }

  // TODO
  const handleDeleteProblemBtn = async (pId) => {
    console.log('handleDeleteProblemBtn 실행', pId)

    // DELETE /api/v1/course/problem:/pId
    // const { data } = await axios.delete(`/api/v1/course/problem/${pId}`)

    setIsChanged(!isChanged)
  }

  // TODO
  const handleProblemName = async (pId) => {
    console.log('handleProblemName 실행', pId)
    // push => status by pId
  }

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

  useEffect(() => {
    console.log('WeekManagement useEffect')
    // const { data } = await axios.get(`/api/v1/##`, { classId })

    const fetchWeekList = async () => {
      const { data } = await axios.get(`/api/v1/course/problem/${classId}`)
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
                    handleProblemName(problem.pId)
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
  border: 1px solid pink;
  width: 100%;
  /* background: ${(props) => props.theme.BACKGROUND}; */
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
  border-left: 4px solid ${(props) => props.theme.INPUT_BACKGROUND};

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
