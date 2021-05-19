import React from 'react'
import styled from 'styled-components'

const Contents = () => {
  const subtitle1 = `A) 학생`
  const text1 = `
  1. 좌측 사이드 탭 또는 햄버거 메뉴를 사용하여 자신이 속한 강좌와 해당 주차에 접근
  
  2. 주차를 선택 시 해당 주차에 포함된 문제 목록을 볼 수 있습니다. 문제 목록에는 해당 문제를 풀이하는 페이지,
  
  해당 문제에 대한 제출 목록을 확인하는 페이지로 이동하는 기능이 있습니다.

    2-1. 해당 문제를 풀이하는 페이지로 이동 시 사용자는 해당 문제를 확인하며 코드를 작성할 수 있습니다.
    
    2-2. 해당 문제를 풀이하는 페이지로 이동 시 사용자는 해당 문제를 확인하며 코드를 작성할 수 있습니다.`

  const subtitle2 = `B) 분반 관리자`
  const text2 = `
  1. 좌측 사이드 탭 또는 햄버거 메뉴를 사용하여 자신이 속한 강좌와 해당 주차에 접근
  
  2. 주차를 선택 시 해당 주차에 포함된z 문제 목록을 볼 수 있습니다. 문제 목록에는 해당 문제를 풀이하는 페이지, 해당 문제에 대한 제출 목록을 확인하는 페이지로 이동하는 기능이 있습니다.
  
  2-1. 해당 문제를 풀이하는 페이지로 이동 시 사용자는 해당 문제를 확인하며 코드를 작성할 수 있습니다.
  
  2-2. 해당 문제를 풀이하는 페이지로 이동 시 사용자는 해당 문제를 확인하며 코드를 작성할 수 있습니다.`

  const subtitle3 = `C) 시스템 관리자`
  const text3 = `
  1. 좌측 사이드 탭 또는 햄버거 메뉴를 사용하여 자신이 속한 강좌와 해당 주차에 접근
  
  2. 주차를 선택 시 해당 주차에 포함된z 문제 목록을 볼 수 있습니다. 문제 목록에는 해당 문제를 풀이하는 페이지, 해당 문제에 대한 제출 목록을 확인하는 페이지로 이동하는 기능이 있습니다.
  
    2-1. 해당 문제를 풀이하는 페이지로 이동 시 사용자는 해당 문제를 확인하며 코드를 작성할 수 있습니다.

    2-2. 해당 문제를 풀이하는 페이지로 이동 시 사용자는 해당 문제를 확인하며 코드를 작성할 수 있습니다.`

  return (
    <Wrapper>
      <Section>
        <SubTitle>{subtitle1}</SubTitle>
        <Text>{text1}</Text>
      </Section>
      <Section>
        <SubTitle>{subtitle2}</SubTitle>
        <Text>{text2}</Text>
      </Section>
      <Section>
        <SubTitle>{subtitle3}</SubTitle>
        <Text>{text3}</Text>
      </Section>
    </Wrapper>
  )
}

export default Contents

const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.SUB_BORDER};
  background: ${(props) => props.theme.INPUT_BACKGROUND};
  border-radius: 5px;
  padding: 30px;
`

const Section = styled.div`
  /* border: 1px solid black; */
  margin-bottom: 30px;
`

const SubTitle = styled.div`
  white-space: pre-wrap;
  font-size: 1.2rem;
  font-weight: bold;

  margin-bottom: 10px;
`

const Text = styled.div`
  white-space: pre-wrap;
  font-size: 1rem;
  padding: 5px;
  margin-bottom: 20px;
`