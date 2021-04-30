import React from 'react'
import AceEditor from 'react-ace'
import { connect } from 'react-redux'

import 'brace/mode/mysql'
// light mode
import 'brace/theme/tomorrow'
// dark mode
import 'brace/theme/tomorrow_night_bright'

const Code = ({ theme }) => {
  const onChange = (input) => {
    console.log(input)
  }

  return (
    <>
      {theme === 'light' ? (
        <AceEditor
          placeholder="코드를 입력하세요."
          mode="mysql"
          theme="tomorrow"
          name="editor"
          width="100%"
          onChange={onChange}
          fontSize={14}
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
          fontSize={14}
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
        <button id="submit-btn">실행</button>
        <button id="submit-btn">제출</button>
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
