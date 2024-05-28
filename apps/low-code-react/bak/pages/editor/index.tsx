// import React from 'react'
import { useParams } from 'react-router-dom'

// const Editor = () => {
function Editor() {
  let { id } = useParams()
  console.log({ id })
  return <div className="text-[33px]">Editor2 {id}</div>
}

export default Editor
