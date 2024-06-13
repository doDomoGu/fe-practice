// import React from 'react'
import { useParams } from 'react-router-dom'

const Editor = () => {
  const { id } = useParams<{ id: string }>()
  return <div>Editor: {id}</div>
}

export default Editor
