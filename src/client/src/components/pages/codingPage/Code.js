import React, { useState } from 'react'
import AceEditor from 'react-ace'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import 'brace/mode/mysql'
// light mode
import 'brace/theme/tomorrow'
// dark mode
import 'brace/theme/tomorrow_night_bright'

const Code = ({ theme }) => {
  const [fontSize, setFontSize] = useState(14)
  const history = useHistory()

  const onChange = (input) => {
    console.log(input)
  }
  const handleFontSize = (e) => {
    setFontSize(parseInt(e.target.value))
  }

  // TODO
  const handleExecCode = () => {}
  const handleSubmitCode = () => {
    history.push('/status')
  }

  return (
    <>
      <div style={{ width: 'auto', textAlign: 'end' }}>
        <select id="select-form" name="글자" onChange={handleFontSize}>
          <option value="14">글자 크기</option>
          <option value="12">12</option>
          <option value="14" selected>
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

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme.mode,
  }
}

export default connect(mapStateToProps)(Code)
