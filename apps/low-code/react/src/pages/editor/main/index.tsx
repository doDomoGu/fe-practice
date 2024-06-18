import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import CompElements from './elements'
import CompPreview from './Preview.tsx'

import { EventContext } from '@/hooks/useEvent'

const Main = (props) => {
  const { eventState, handleEvent } = useContext(EventContext)
  // const { id } = useContent(EditorContext)
  // console.log({ eventState })
  // if (eventState)
  return (
    <div className="flex">
      {/* 左侧 (元件库) */}
      <div className="flex-none">
        <CompElements />
      </div>

      {/* 中间 (画布预览) */}
      <div className="flex-1">
        <CompPreview />
      </div>

      {/* 右侧 (配置区) */}
      <div className="flex-none">settings</div>
    </div>
  )
}

Main.propTypes = {}

export default Main
