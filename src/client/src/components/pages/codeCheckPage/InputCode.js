import React, { useState } from 'react'
import AceEditor from 'react-ace'
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/mode-mysql'
import 'ace-builds/src-noconflict/snippets/mysql'
import 'ace-builds/src-noconflict/ext-beautify'
import 'ace-builds/src-noconflict/ext-language_tools'
// light mode
import 'ace-builds/src-noconflict/theme-tomorrow'
// dark mode
import 'ace-builds/src-noconflict/theme-tomorrow_night_eighties'

const InputCode = ({ theme, pId, code }) => {
  const history = useHistory()
  const { classId, weekId, submitId } = useParams()

  const [fontSize, setFontSize] = useState(16)

  const handleEditCode = () => {
    history.push(`/${classId}/${weekId}/problem/${pId}/${submitId}`)
  }

  const onChange = (input) => {}

  const handleFontSize = (e) => {
    setFontSize(parseInt(e.target.value))
  }

  return (
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
          readOnly
          mode="mysql"
          theme="tomorrow"
          name="editor"
          width="100%"
          onChange={onChange}
          fontSize={fontSize}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={`${code}`}
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
          readOnly
          mode="mysql"
          theme="tomorrow_night_eighties"
          name="editor"
          width="100%"
          onChange={onChange}
          fontSize={fontSize}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={`${code}`}
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
        <button id="submit-btn" onClick={handleEditCode}>
          수정
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

export default connect(mapStateToProps)(InputCode)
