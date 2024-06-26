import { HashRouter, useRoutes } from 'react-router-dom'
import { router } from './router'

const Routers = () => useRoutes(router)

function App() {
  return (
    <HashRouter>
      <Routers />
    </HashRouter>
  )
}

export default App
