import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { TextField } from '@material-ui/core'

// TODO +, - 머테 아이콘으로

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

    setIsChanged(!isChanged)
  }

  // TODO
  const handleDeleteWeekBtn = (weekId) => {
    console.log('handleDeleteWeekBtn 실행', weekId)

    setIsChanged(!isChanged)
  }

  // TODO
  const handleAddProblemBtn = (weekId) => {
    console.log('handleAddProblemBtn 실행', weekId)

    setIsChanged(!isChanged)
  }

  // TODO
  const handleDeleteProblemBtn = (pId) => {
    console.log('handleDeleteProblemBtn 실행', pId)

    setIsChanged(!isChanged)
  }

  // TODO
  const handleProblemName = (pId) => {
    console.log('handleProblemName 실행', pId)
    // push => status by pId
  }

  const classInfo = [
    {
      weekName: '1주차 실습(ㄱㄴㄷ)',
      weekId: '1',
      problemList: [
        { pId: '1', pName: '1번 문제' },
        { pId: '2', pName: '2번 문제' },
        { pId: '3', pName: '3번 문제' },
      ],
    },
    {
      weekName: '2주차 실습(ㅁㄴㅇ)',
      weekId: '2',
      problemList: [
        { pId: '4', pName: '1번 문제' },
        { pId: '5', pName: '2번 문제' },
        { pId: '6', pName: '3번 문제' },
      ],
    },
    {
      weekName: '3주차 실습',
      weekId: '3',
      problemList: [
        { pId: '8', pName: '1번 문제' },
        { pId: '12', pName: '2번 문제' },
      ],
    },
  ]

  useEffect(() => {
    // const {data} = await axios.get(`/api/v1/##`, {classId})
    console.log('WeekManagement useEffect')
  }, [, isChanged])

  return (
    <Wrapper>
      <AddWeekWrapper>
        <AddWeekText>주차 추가</AddWeekText>

        <AddWeekForm noValidate autoComplete="off">
          <StyledTextField id="outlined-basic" label="주차 이름" placeholder="주차 이름을 입력하세요." variant="outlined" onChange={handleChangeNewWeekName} />
          <AddWeekBtn onClick={handleAddWeekBtn}>추가</AddWeekBtn>
        </AddWeekForm>
      </AddWeekWrapper>

      {classInfo.map((week) => (
        <WeekWrapper>
          <WeepNameWrapper>
            <WeekNameText>{week.weekName}</WeekNameText>
            <BtnBox>
              <Btn
                onClick={() => {
                  handleDeleteWeekBtn(week.weekId)
                }}
              >
                -
              </Btn>
              <Btn
                onClick={() => {
                  handleAddProblemBtn(week.weekId)
                }}
              >
                +
              </Btn>
            </BtnBox>
          </WeepNameWrapper>
          {week.problemList.map((problem) => (
            <ProblemWrapper>
              <ProblemNameText
                onClick={() => {
                  handleProblemName(problem.pId)
                }}
              >
                {problem.pName}
              </ProblemNameText>
              <BtnBox>
                <Btn
                  onClick={() => {
                    handleDeleteProblemBtn(problem.pId)
                  }}
                >
                  -
                </Btn>
              </BtnBox>
            </ProblemWrapper>
          ))}
        </WeekWrapper>
      ))}
    </Wrapper>
  )
}

export default WeekManagement

const Wrapper = styled.div`
  border: 1px solid red;
  padding: 10px;
`

const AddWeekWrapper = styled.div`
  padding: 5px;

  display: flex;
  flex-direction: column;

  /* border: 1px solid blue; */
`

const AddWeekForm = styled.form`
  display: flex;
`

const AddWeekText = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 20px;
`

// const StyledTextField = styled(TextField)`
//   && {
//     width: 100%;
//     margin-left: 20px;
//     margin-right: 5px;
//     /* background: ${(props) => props.theme.BOARD_LIST_HOVER}; */
//     /* background: white; */
//   }
// `

const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    background: ${(props) => props.theme.INPUT_BACKGROUND};
    margin-left: 20px;
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
  /* font-weight: bold; */
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
  /* border: 1px solid blue; */
  padding: 3px;
  margin: 5px 0px;
`

const WeekNameText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

const WeepNameWrapper = styled.div`
  /* border: 1px solid black; */

  display: flex;
  justify-content: space-between;
`

const ProblemWrapper = styled.div`
  /* border: 1px solid green; */
  padding: 3px;

  display: flex;
  justify-content: space-between;
`

const ProblemNameText = styled.div`
  font-size: 1.1rem;
  display: flex;
  margin-left: 20px;
`

const Btn = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px;
  /* border: 2px solid red; */
`

const BtnBox = styled.div`
  display: flex;
  /* border: 1px solid pink; */
`
