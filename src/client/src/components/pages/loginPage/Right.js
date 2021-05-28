import React, { useState } from 'react'
import styled from 'styled-components'
import sejongLogo from '../../../assets/sejong_logo.png'

const Right = () => {
  const [input, setInput] = useState('Hello world!')
  const handleChangeInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <Container>
      <img src={sejongLogo} alt="logo" style={{ width: '25%', position: 'fixed', top: '120px' }} />
      <div style={{ boxShadow: '3px 20px 80px black', position: 'fixed', top: '350px', width: '40%' }}>
        <Menu>
          <RedCircle />
          <YellowCircle />
          <GreenCircle />
        </Menu>
        <Code>
          <StyledTextArea value={input} onChange={handleChangeInput} />
        </Code>
      </div>
    </Container>
  )
}

export default Right

const Container = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.POINT};
`

const Menu = styled.div`
  width: 100%;
  height: 30px;
  background: ${(props) => props.theme.HEADER_BACKGROUND};
  border-radius: 5px 5px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const RedCircle = styled.div`
  margin-left: 10px;
  margin-right: 5px;
  width: 12px;
  height: 12px;
  background: red;
  border-radius: 50%;
`

const YellowCircle = styled.div`
  margin-right: 5px;
  width: 12px;
  height: 12px;
  background: orange;
  border-radius: 50%;
`

const GreenCircle = styled.div`
  margin-right: 5px;
  width: 12px;
  height: 12px;
  background: green;
  border-radius: 50%;
`

const Code = styled.div`
  width: 100%;
  height: 350px;
  text-align: center;
  padding: 20px 10px;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
  background: ${(props) => props.theme.BACKGROUND};
`
const StyledTextArea = styled.textarea`
  resize: none;
  color: ${(props) => props.theme.GENERAL_FONT};
  background: ${(props) => props.theme.BACKGROUND};
  width: 100%;
  height: 300px;
  border: none;
  &:focus {
    outline: none;
  }
`
