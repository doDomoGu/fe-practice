import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Elements from './elements'

import { EventContext } from '@/hooks/useEvent'

const Main = (props) => {
  const { eventState, handleEvent } = useContext(EventContext)
  console.log({ eventState })
  // if (eventState)
  return (
    <div className="flex">
      {/* 左侧 (元件库) */}
      <div className="flex-none">
        <Elements />
      </div>

      {/* 中间 (画布预览) */}
      <div className="flex-1">preview</div>

      {/* 右侧 (配置区) */}
      <div className="flex-none">settings</div>
    </div>
  )
}

Main.propTypes = {}

export default Main
