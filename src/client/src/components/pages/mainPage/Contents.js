import React from 'react'
import styled from 'styled-components'

const Contents = () => {
  const subtitle1 = `A) 학생`
  const text1 = `
  1. 좌측 사이드 탭 또는 햄버거 메뉴를 사용하여 자신이 속한 강좌와 해당 주차에 접근
  
  2. 주차를 선택 시 해당 주차에 포함된 문제 목록을 볼 수 있습니다. 문제 목록에는 해당 문제를 풀이하는 페이지, 해당 문제에 대한 제출 목록을 확인하는 페이지로 이동하는 기능이 있습니다.

    2-1. 해당 문제를 풀이하는 페이지로 이동 시 사용자는 해당 문제를 확인하며 코드를 작성할 수 있습니다.
    
    2-2. 해당 문제에 대한 제출 목롤 확인 페이지로 이동 시 사용자는 제출 결과 및 작성 코드를 확인할 수 있습니다.`

  const subtitle2 = `B) 분반 관리자`
  const text2 = `
  1. 좌측 사이드 탭 또는 햄버거 메뉴를 사용하여 자신이 관리하는 강좌와 해당 주차에 접근
  
  2. 주차를 선택 시 해당 주차에 포함된 문제 목록을 볼 수 있습니다. 문제 목록에는 해당 문제를 풀이하는 페이지, 해당 문제에 대한 제출 목록을 확인하는 페이지로 이동하는 기능이 있습니다.
  
    2-1. 해당 문제를 풀이하는 페이지로 이동 시 사용자는 해당 문제를 확인하며 코드를 작성할 수 있습니다.
  
    2-2. 해당 문제에 대한 제출 목록 확인 페이지로 이동 시 학생들이 제출한 코드에 대한 결과를 확인 및 수정할 수 있습니다.
  
  3. 좌측 사이드 탭 또는 햄버거 메뉴에서 설정 버튼을 통해 강좌의 관리가 가능합니다.
  
    3-1. 새로운 주차를 추가 및 삭제할 수 있습니다.

    3-2. +와 - 버튼을 통해 해당 주차에 새로운 문제를 생성하는 페이지로 이동하거나 기존의 문제를 삭제할 수 있습니다..
    
    3-3. 조교 및 학생을 추가 및 삭제할 수 있습니다.`

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
  margin-bottom: 30px;
`

const SubTitle = styled.div`
  color: ${(props) => props.theme.GENERAL_FONT};
  white-space: pre-wrap;
  font-size: 1.2rem;
  font-weight: bold;

  margin-bottom: 10px;
`

const Text = styled.div`
  color: ${(props) => props.theme.GENERAL_FONT};
  white-space: pre-wrap;
  font-size: 1rem;
  padding: 5px;
  margin-bottom: 20px;
  line-height: 130%;
`
