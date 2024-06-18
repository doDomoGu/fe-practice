import React, { useContext } from 'react'

const Preview = () => {
  const { id } = useContent(EditorContext)

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-none h-[30px] leading-[30px] bg-gray-300 text-gray-400 text-center">
        画布区 {id}
      </div>
      <div className="flex-1 p-[10px] overflow-hidden">
        <iframe
          id="editor-preview"
          src={`/editor-canvas/${id}`}
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  )
}

Preview.propTypes = {}

export default Preview
