import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div>Home</div>
      <div className="mt-4 flex">
        <Link to="/paper">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            生成游戏纸
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
