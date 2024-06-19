import React from 'react'
import { useParams } from 'react-router-dom'

const EditorCanvas = () => {
  const { id } = useParams<{ id: string }>()

  // 接收 "画布预览"页面的message
  window.addEventListener('message', (e) => {
    console.log('11 received-message', e.data)
    const { from, action, data } = e.data
    if (from == 'editor') {
      console.log('12')
      switch (action) {
        case 'init':
          initData(data)
          break
        case 'addControl':
          addControl(data)
          break
        case 'clearControl':
          clearControl()
          break
      }
    }
  })

  return (
    <div>
      <div>编辑器 - 画布</div>
      <div>{id}</div>
    </div>
  )
}

export default EditorCanvas
