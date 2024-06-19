import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import CompElements from './elements'
import CompPreview from './preview'
import CompSettings from './settings'

import { EventContext } from '@/hooks/useEvent'

const Main = (props) => {
  const { eventState, handleEvent } = useContext(EventContext)
  // const { id } = useContent(EditorContext)
  // console.log({ eventState })
  // if (eventState)

  // console.log('onMounted', document.getElementById('editor-preview'))
  setTimeout(() => {
    let editorPreviewIframe = document.getElementById('editor-preview')
    if (!editorPreviewIframe) return
    // console.log('onload', 'postmessage')
    editorPreviewIframe.contentWindow.postMessage(
      {
        from: 'editor',
        action: 'init',
        data: [123]
      },
      '*'
    )
    console.log('onload', 'postmessage')
  }, 500)

  return (
    <div className="flex h-full">
      {/* 左侧 (元件库) */}
      <div className="flex-none w-[280px] h-full">
        <CompElements />
      </div>

      {/* 中间 (画布预览) */}
      <div className="flex-1">
        <CompPreview />
      </div>

      {/* 右侧 (配置区) */}
      <div className="flex-none w-[280px] h-full">
        <CompSettings />
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
