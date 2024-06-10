// import { useState } from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import { router } from './router'

const Routers = () => useRoutes(router)

function App() {
  // const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routers />
    </HashRouter>
  )
}

export default App
