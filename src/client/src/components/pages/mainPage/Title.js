import React, { useState } from 'react'
import styled from 'styled-components'
import Clock from 'react-live-clock'

const Title = () => {
  return (
    <Wrapper>
      {/* <TitleText1>Sejong SQL OJ</TitleText1> */}
      <TitleText1>WELCOME to</TitleText1>
      <TitleText2>Sejong SQL OJ</TitleText2>
      <Clock format={'YYYY년 MM월 DD 일 HH:mm:ss'} ticking={true} />
    </Wrapper>
  )
}

export default Title

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  margin-bottom: 40px;

  color: ${(props) => props.theme.GENERAL_FONT};

  border: 1.5px solid black;
  border-radius: 10px;
  background: ${(props) => props.theme.HEADER_BACKGROUND};
`

// const TitleText1 = styled.div`
//   font-size: 2rem;
//   font-weight: bold;
//   margin-top: 20px;
//   margin-bottom: 45px;
//   display: flex;
//   justify-content: center;
// `

const TitleText1 = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  position: relative;
  right: 75px;

  letter-spacing: 2px;
`

const TitleText2 = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 45px;
  display: flex;
  justify-content: center;

  letter-spacing: 1px;
`
