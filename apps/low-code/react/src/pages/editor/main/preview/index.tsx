import React, { useContext } from 'react'

import { EditorContext } from '../../EditorContext'

const Preview = () => {
  const { id } = useContext(EditorContext)

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-none h-[30px] leading-[30px] bg-gray-300 text-gray-900 text-center">
        画布区 {id}
      </div>
      <div className="flex-1 p-[10px] overflow-hidden">
        <iframe
          id="editor-preview"
          src={`/#/editor-canvas/${id}`}
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  )
}

Preview.propTypes = {}

export default Preview
