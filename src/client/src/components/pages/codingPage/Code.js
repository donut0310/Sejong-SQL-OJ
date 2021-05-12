import React, { useState } from 'react'
import AceEditor from 'react-ace'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/mode-mysql'
import 'ace-builds/src-noconflict/snippets/mysql'
import 'ace-builds/src-noconflict/ext-beautify'
import 'ace-builds/src-noconflict/ext-language_tools'
// light mode
import 'ace-builds/src-noconflict/theme-tomorrow'
// dark mode
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright'

const Code = ({ theme, user }) => {
  const [fontSize, setFontSize] = useState(14)
  const history = useHistory()

  //ace.require('brace/ext/language_tools')

  const onChange = (input) => {
    console.log(input)
  }
  const handleFontSize = (e) => {
    setFontSize(parseInt(e.target.value))
  }

  // TODO
  const classId = 1
  const weekId = 1
  const pId = '1'
  const submitId = ''
  const input = 'select * from aaa'

  const handleExecCode = () => {
    ;(async () => {
      const { data } = await axios.post(`/api/v1/user/code/exec/${pId}`, { user_query: input })
      // data => result: {is_error, err_msg, exec_result}, message: "success"
      console.log('handleExecCode data=> ', data)
    })()
  }

  const handleSubmitCode = () => {
    history.push(`${classId}/${weekId}/status?userId=${user.id}&pId=${pId}`)
    ;(async () => {
      const { data } = await axios.post(`/api/v1/user/code/submit/${pId}`, { user_query: input })
      // data => message: string
      console.log('handleSubmitCode=> ', data)
    })()
  }

  return (
    // submitId !=== null -> 수정
    // else -> 새로 작성
    <>
      <div style={{ width: 'auto', textAlign: 'end' }}>
        <select id="select-form" name="글자" onChange={handleFontSize}>
          <option value="14">글자 크기</option>
          <option value="12">12</option>
          <option value="14" defaultValue>
            14
          </option>
          <option value="16">16</option>
          <option value="18">18</option>
        </select>
      </div>
      {theme === 'light' ? (
        <AceEditor
          placeholder="코드를 입력하세요."
          mode="mysql"
          theme="tomorrow"
          name="editor"
          width="100%"
          onChange={onChange}
          fontSize={fontSize}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={``}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
          style={{
            borderRadius: '5px',
            boxSizing: 'border-box',
          }}
        />
      ) : (
        <AceEditor
          placeholder="코드를 입력하세요."
          mode="mysql"
          theme="tomorrow_night_bright"
          name="editor"
          width="100%"
          onChange={onChange}
          fontSize={fontSize}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={``}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
          style={{
            borderRadius: '5px',
            boxSizing: 'border-box',
          }}
        />
      )}
      <div style={{ width: '100%', textAlign: 'end', margin: '10px 0' }}>
        <button id="submit-btn" onClick={handleExecCode}>
          실행
        </button>
        <button id="submit-btn" onClick={handleSubmitCode}>
          제출
        </button>
      </div>
    </>
  )
}

const mapStateToProps = ({ theme, user }) => {
  return {
    theme: theme.mode,
    user,
  }
}

export default connect(mapStateToProps)(Code)
