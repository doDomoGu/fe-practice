import React from 'react'
import { useParams } from 'react-router-dom'

const Preview = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <div>
      <div>编辑器 - 画布</div>
      <div>{id}</div>
    </div>
  )
}

export default Preview
