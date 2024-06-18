import React, { useContext } from 'react'

import { EditorContext } from '../../EditorContext'

const Settings = () => {
  const { id } = useContext(EditorContext)

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-none h-[30px] leading-[30px] bg-gray-800 text-gray-400 text-center">
        配置区 {id}
      </div>
      <div className="flex-1 p-[10px] overflow-hidden bg-gray-200 text-gray-800">
        <div>配置1</div>
        <div>配置2</div>
        <div>配置3</div>
        <div>配置4</div>
      </div>
    </div>
  )
}

// Settings.propTypes = {}

export default Settings
