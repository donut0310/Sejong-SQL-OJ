import { Container } from '@material-ui/core'
import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import CodingPage from '../../containers/codingPage'
import CodingEditPage from '../../containers/codingEditPage'
import ProblemPage from '../../containers/problemPage'
import StatusPage from '../../containers/statusPage'
import MainPage from '../../containers/mainPage'
import CodeCheckPage from '../../containers/codeCheckPage'

import ProblemAddPage from '../../containers/problemAddPage'
import ClassManagePage from '../../containers/classManagePage'
import SystemManagePage from '../../containers/systemManagePage'

const Main = () => {
  return (
    <MainWrapper maxWidth="md">
      <Route exact path="/" component={MainPage} />
      <Route path="/:classId/:weekId/problem/:pId" component={CodingPage} />
      <Route path="/:classId/:weekId/problem/:pId/:submitId" component={CodingEditPage} />
      <Route path="/:classId/:weekId/contents" component={ProblemPage} />
      <Route path="/:classId/:weekId/status" component={StatusPage} />
      <Route path="/:classId/:weekId/code/:submitId" component={CodeCheckPage} />
      <Route path="/manage/:classId/:weekId/addproblem" component={ProblemAddPage} />
      <Route exact path="/manage/:classId" component={ClassManagePage} />
      {/* TODO path 정하기 */}
      <Route path="/admin" component={SystemManagePage} />
    </MainWrapper>
  )
}

export default Main

const MainWrapper = styled(Container)`
  flex: 1;
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;

  padding-top: 20px;
  padding-bottom: 20px;
`
