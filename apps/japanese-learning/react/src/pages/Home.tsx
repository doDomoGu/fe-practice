import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const links = [
    {
      name: '五十音图',
      url: 'fifty-tone'
    }
  ]
  return (
    <div>
      <div>Home</div>
      <div className="mt-4 flex">
        <div className="mr-4">导航</div>

        <div>
          {links.map((link) => (
            <Link to={link.url} className="hover:underline hover:text-blue-500">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
