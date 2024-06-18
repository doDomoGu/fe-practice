import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const EditorHeader = () => {
  const { id } = useContext(EditorContext)

  return (
    <div className="h-[32px] w-full flex">
      <div className="w-[100px] pl-[6px] flex flex-row items-center">
        <div className="hover:text-blue-500">
          <Link to={'/'}>{'<'}返回</Link>
        </div>
      </div>
      <div className="flex-1 text-center">编辑器页面 id: {id}</div>
      <div className="w-[100px] pr-[6px] flex flex-row items-center justify-end">
        <div className="hover:text-blue-500">
          <button>保存</button>
        </div>
      </div>
    </div>
  )
}
EditorHeader.propTypes = {}

export default EditorHeader
